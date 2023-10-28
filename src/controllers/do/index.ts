import OpenAI from "openai";
import { exec as execCb } from 'child_process';
import { promisify } from 'util';

const exec = promisify(execCb);

async function executeCommandsSequentially(commands: string[]): Promise<void> {
    for (const command of commands) {
        try {
            const { stdout, stderr } = await exec(command, { shell: 'powershell.exe' });
            if (stdout) {
                console.log(stdout);
            }
            if (stderr) {
                console.log(stderr);
            }
        } catch (err: any) {
            console.log(err.stderr);
        }
    }
}

export const main = async (args: { prompt: string }) => {
    try {
        const openai = new OpenAI({ apiKey: "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" });
        const completion = await openai.chat.completions.create({
            messages: [{
                role: "system",
                content: `
                    Talk to me like a assistant AI CLI chatbot. I would give you instructions in plain english regarding different commands. you need to understand the input prompts and derive corresponding following commands for Windows PowerShell. !!Strictly do not use aliases like echo in PowerShell rather stick to exact cmdlets of Windows Powershell!!:

                    There can be multiple commands required to be executed in a sequence. Give all the commands in a single response separated by a comma.
                    Only give me the derived command in the response. nothing else.
                    You will get the question command below:

                    "${args.prompt}"
                `
            }],
            model: "gpt-3.5-turbo",
        })

        const command = String(completion.choices[0].message.content);
        console.log(command);
        const commands = command.split(",");
        await executeCommandsSequentially(commands);

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