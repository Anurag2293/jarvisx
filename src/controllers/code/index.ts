import OpenAI from 'openai';
import { exec } from 'child_process';

export const main = async (args: { prompt: string }) => {
    try {
        const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

        // console.log(process.env.OPENAI_API_KEY);

        const completion = await openai.chat.completions.create({
            messages: [{
                role: "system",
                content: `
                    Talk to me like a assistant AI CLI chatbot. I would give you instructions in plain english regarding compiling, interpreting code of different languages namely C++, Java, JavaScript. you need to understand the input prompts and derive corresponding following commands:

                    1. compileCPP fileName -> for compiling C++ file named fileName
                    2. executeCPP fileName -> for executing C++ file named fileName
                    3. compileJava fileName -> for compiling Java file named fileName
                    4. executeJava fileName -> for executing Java file named fileName
                    5. runJS fileName -> for running JavaScript file named fileName

                    Only give me the derived command in the response. nothing else.
                    You will get the question command below:

                    "${args.prompt}"
                `
            }],
            model: "gpt-3.5-turbo",
        })

        const response = String(completion.choices[0].message.content);
        const outputArray = response.split(" ");
        const command = outputArray[0];
        const fileName = outputArray[1];

        // console.log(command, fileName)

        let success = true;
        let message = "";

        switch (command) {
            case "compileCPP":
                const compile = `g++ ${fileName.split(".")[0]}.cpp -o ${fileName.split(".")[0]}.exe`;
                console.log(compile)
                exec(compile, (err, stdout, stderr) => {
                    if (err) {
                        success = false;
                        message = stderr;
                    } else {
                        message = "Compiled Successfully";
                    }
                });
                break;
            case "executeCPP":
                const executableName = `${fileName.split(".")[0]}.exe`;
                exec(executableName, (error, stdout, stderr) => {
                    if (error) {
                        success = false;
                        message = stderr;
                    } else {
                        console.log(stdout);
                        message = "Executed Successfully"
                    }
                });
                break;
            case "compileJava":
                exec(`javac ${fileName}`, (err, stdout, stderr) => {
                    if (err) {
                        success = false;
                        message = stderr;
                    } else {   
                        message = "Compiled Successfully";
                    }
                });
                break;
            case "executeJava":
                exec(`java ${fileName.split(".")[0]}`, (error, stdout, stderr) => {
                    if (error) {
                        success = false;
                        message = stderr;
                    } else {
                        console.log(stdout);
                        message = "Executed Successfully"
                    }
                });
                break;
            case "runJS":
                exec(`node ${fileName}`, (error, stdout, stderr) => {
                    if (error) {
                        success = false;
                        message = stderr;
                    } else {
                        console.log(stdout);
                        message = "Executed Successfully"
                    }
                });
                break;
            default:
                success = false;
                message = "Invalid command";
                break;
        }

        return { success, message }
    } catch (error: any) {
        return { success: false, message: error.message }
    }
}