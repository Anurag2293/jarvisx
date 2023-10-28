import * as fs from 'fs';

type Response = {
    success: boolean;
    message: string;
}

export const createFile = (fileName: string): Response => {
    try {
        fs.writeFileSync(fileName, '');
        return {
            success: true,
            message: 'File created successfully'
        }
    } catch (error: any) {
        return {
            success: false,
            message: error.message
        }
    }
}

export const createFolder = (folderName: string): Response => {
    try {
        fs.mkdirSync(folderName);
        return {
            success: true,
            message: 'Folder created successfully'
        }
    } catch (error: any) {
        return {
            success: false,
            message: error.message
        }
    }
}

export const deleteFile = (fileName: string): Response => {
    try {
        fs.unlinkSync(fileName);
        return {
            success: true,
            message: 'File deleted successfully'
        }
    } catch (error: any) {
        return {
            success: false,
            message: error.message
        }
    }
}

export const deleteFolder = (folderName: string): Response => {
    try {
        fs.rmdirSync(folderName);
        return {
            success: true,
            message: 'Folder deleted successfully'
        }
    } catch (error: any) {
        return {
            success: false,
            message: error.message
        }
    }
}

export const readFile = (fileName: string): Response => {
    try {
        const response = fs.readFileSync(fileName, 'utf-8');
        return {
            success: true,
            message: response
        }
    } catch (error: any) {
        return {
            success: false,
            message: error.message
        }
    }
}

export const writeFile = (fileName: string, sentence: string): Response => {
    try {
        fs.writeFileSync(fileName, sentence);
        return {
            success: true,
            message: 'File written successfully'
        }
    } catch (error: any) {
        return {
            success: false,
            message: error.message
        }
    }
}