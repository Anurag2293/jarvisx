import OpenAI from 'openai';

import { createFile, createFolder, deleteFile, deleteFolder, readFile, writeFile } from './fileOperations.js';

export const main = async (args: {prompt: string}) => {
    const openai = new OpenAI({ apiKey: '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' });

    const completion = await openai.chat.completions.create({
        messages: [{
            role: "system",
            content: `
                    Talk to me like a assistant AI CLI chatbot. I would give you instructions in plain english regarding creating, reading, updating and deleting of files and folders from the current directory. you need to understand the input prompts and derive corresponding following commands:  
                    1. deleteFile fileName -> for deleting file named fileName
                    2. deleteFolder folderName -> for deleting directory named folderName
                    3. createFile fileName - > for creating file named fileName
                    4. createFolder folderName -> for creating directory named folderName
                    5. readFile fileName -> for reading file named fileName
                    6. writeFile fileName "Sentence" -> for writing "Sentence" to file named fileName
            
                    Only give me the derived command in the response. nothing else.
                    You will get the question command below:
                    
                    "${args.prompt}"
                `
        }],
        model: "gpt-3.5-turbo",
    });

    const response = String(completion.choices[0].message.content);
    const outputArray = response.split(" ");
    const command = outputArray[0];
    const fileName = outputArray[1];

    if (command === "deleteFile") {
        deleteFile(fileName);
    } else if (command === "deleteFolder") {
        deleteFolder(fileName);
    } else if (command === "createFile") {
        createFile(fileName);
    } else if (command === "createFolder") {
        createFolder(fileName);
    } else if (command === "writeFile") {
        const sentence = outputArray.slice(2).join(" ");
        // remove quotes from sentence
        const sentenceWithoutDoubleQuotes = sentence.substring(1, sentence.length - 1);
        writeFile(fileName, sentenceWithoutDoubleQuotes);
        console.log(sentenceWithoutDoubleQuotes);
    } else if (command === "readFile") {
        console.log(readFile(fileName));
    } else {
        console.log("Invalid command");
    }

    return response;
}