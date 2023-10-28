import fs from 'fs';

export const createFile = (fileName: string): void => {
    fs.writeFileSync(fileName, '');
}

export const createFolder = (folderName: string): void => {
    fs.mkdirSync(folderName);
}

export const deleteFile = (fileName: string): void => {
    fs.unlinkSync(fileName);
}

export const deleteFolder = (folderName: string): void => {
    fs.rmdirSync(folderName);
}