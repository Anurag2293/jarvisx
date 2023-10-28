import OpenAI from 'openai';

import { createFile, createFolder, deleteFile, deleteFolder, readFile, writeFile } from './fileOperations.js';

export const main = async (args: { prompt: string }) => {
    try {
        const openai = new OpenAI({ apiKey: "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" });

        // console.log(process.env.OPENAI_API_KEY);

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

        let success = false;
        let message = "";

        switch (command) {
            case "deleteFile":
                const deleteFileResponse = deleteFile(fileName);
                success = deleteFileResponse.success;
                message = deleteFileResponse.message;
                break;
            case "deleteFolder":
                const deleteFolderResponse = deleteFolder(fileName);
                success = deleteFolderResponse.success;
                message = deleteFolderResponse.message;
                break;
            case "createFile":
                const createFileResponse = createFile(fileName);
                success = createFileResponse.success;
                message = createFileResponse.message;
                break;
            case "createFolder":
                const createFolderResponse = createFolder(fileName);
                success = createFolderResponse.success;
                message = createFolderResponse.message;
                break;
            case "readFile":
                const readFileResponse = readFile(fileName);
                success = readFileResponse.success;
                message = readFileResponse.message;
                break;
            case "writeFile":
                const sentence = outputArray.slice(2).join(" ");
                const sentenceWithoutDoubleQuotes = sentence.substring(1, sentence.length - 1);
                writeFile(fileName, sentenceWithoutDoubleQuotes);
                success = true;
                message = sentenceWithoutDoubleQuotes;
                break;
            default:
                success = false;
                message = "Invalid command";
                break;
        }

        return {
            success,
            message
        }
    } catch (error: any) {
        return {
            success: false,
            message: error.message
        }
    }
}