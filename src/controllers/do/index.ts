import OpenAI from "openai";
import { exec } from "child_process";

export const main = async (args: { prompt: string }) => {
    try {
        const openai = new OpenAI({ apiKey: "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" });
        const completion = await openai.chat.completions.create({
            messages: [{
                role: "system",
                content: `
                    Talk to me like a assistant AI CLI chatbot. I would give you instructions in plain english regarding different commands. you need to understand the input prompts and derive corresponding following commands for Windows PowerShell:

                    Only give me the derived command in the response. nothing else.
                    You will get the question command below:

                    "${args.prompt}"
                `
            }],
            model: "gpt-3.5-turbo",
        })

        const command = String(completion.choices[0].message.content);
        console.log(command);
        exec(command, { shell: 'powershell.exe' }, (err, stdout, stderr) => {
            if (err) {
                console.log(stderr);
            } else {
                console.log(stdout);
            }
        });
    } catch (error) {
        console.log(error);
    }
}