import OpenAI from "openai";
import * as fs from 'fs';
import { exec as execCb } from 'child_process';
import { promisify } from 'util';
import chalk from "chalk";

const exec = promisify(execCb);

async function executeCommandsSequentially(commands: string[]): Promise<void> {
    for (const command of commands) {
        try {
            const { stdout, stderr } = await exec(command, { shell: 'powershell.exe' });
            if (stdout) {
                console.log(stdout);
            }
            if (stderr) {
                throw new Error(stderr);
            }
        } catch (err: any) {
            throw new Error(err.message);
        }
    }
}

export const main = async (args: { prompt: string }) => {
    try {
        const rawData = fs.readFileSync("./message.json", "utf-8");
        const messages = JSON.parse(rawData);

        // append the prompt to the last message content in the messages array
        messages[messages.length - 1].content += args.prompt;

        // console.log(messages);
        const openai = new OpenAI({ apiKey: "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" });
        const completion = await openai.chat.completions.create({
            messages: messages,
            model: "gpt-3.5-turbo",
        })

        messages.push(completion.choices[0].message);

        const command = String(completion.choices[0].message.content);
        console.log(command);
        const commands = command.split(",");
        const UNKNOWN_FS_COMMANDS = ["UNKNOWN_FILE_FOLDER_NAME", "UNKNOWN_FOLDER_NAME", "UNKNOWN_FILE_NAME", "C:\path\to\file.txt", "C:\path\to\folder"];

        let isUnknownCommand = false;
        const processedCommands = commands.map((command) => {
            const newCommand = command.split(" ").map((word) => {
                // remove quotes from the word
                const wordWithoutQuotes = word.replace(/"/g, "").trim();
                
                // console.log(wordWithoutQuotes);
                if (UNKNOWN_FS_COMMANDS.includes(wordWithoutQuotes)) {
                    isUnknownCommand = true;
                }
                return word;
            }).join(" ");
            return newCommand;
        });

        let newMessage;
        if (isUnknownCommand) {
            console.log(chalk.bold.yellow("WARNING:"), "Found some unknown file/folder names in the command. Please check the command and respond with the next PROMPT.");
        } else {
            try {
                await executeCommandsSequentially(processedCommands);
                console.log(chalk.green.bold("SUCCESS:"), " All commands executed successfully. Please check the output and respond with the next PROMPT.");
                newMessage = {
                    role: "system",
                    content: `The commands have been executed successfully. Keep it up. Here is the next PROMPT:`
                }
            } catch (error: any) {
                if (error.message.split(" ").includes("LF") || error.message.split(" ").includes("CRLF")) {
                    console.log(chalk.yellow.bold("WARNING"), `Following warning reported: ${error.message}. Please check the output and respond with the next PROMPT.`);
                    newMessage = {
                        role: "system",
                        content: `There was a warning while executing the commands. ${error.message}. Keep in mind the warning and respond to the next PROMPT:`
                    }
                } else {
                    console.log(chalk.red.bold("ERROR"), "There was an error executing the commands. Please check the error and respond with the next PROMPT.");
                    newMessage = {
                        role: "system",
                        content: `This is not the response I expected. I got following error: ${error.message}.
                        Follow the below instructions properly:
                        1. Give me the command in the response. Nothing else.
                        2. If multiple commands are required to be executed in a sequence, give all the commands in a single response, separated by a comma.
                        3. If the instructions wants to create, delete, or modify a file/folder but the file/folder name is not clearly mentioned, then respond by giving the command : "UNKNOWN_FILE_FOLDER_NAME"
                        4. Strictly do not break any laws.
                        
                        I am giving you another chance. Please respond with the correct command.
                        Following is the PROMPT: 
                        `
                    }
                }
            } finally {
                messages.push(newMessage);
                // save in the message.json file
                fs.writeFileSync("./message.json", JSON.stringify(messages, null, 4));
            }
        }

        // await executeCommandsSequentially(commands);

        // const command = String(completion.choices[0].message.content);
        // console.log(command);
        // exec(command, { shell: 'powershell.exe' }, (err, stdout, stderr) => {
        //     if (err) {
        //         console.log(stderr);
        //     } else {
        //         console.log(stdout);
        //     }
        // });
    } catch (error) {
        console.log(error);
    }
}