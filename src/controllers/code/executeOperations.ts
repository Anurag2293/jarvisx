import { exec } from "child_process";
import * as fs from "fs";

type Response = {
    success: boolean,
    message: string
}

export const compileCPP = (fileName: string) => {
    exec(`g++ ${fileName}.cpp -o ${fileName}`, (error, stdout, stderr) => {
        if (error) {
            return {
                success: false,
                message: error.message
            }
        }

        if (stderr) {
            return {
                success: false,
                message: stderr
            }
        }

        return {
            success: true,
            message: stdout
        }
    });
}

export const executeCPP = (fileName: string) => {
    const executableName = `${fileName}.exe`;
    exec(executableName, (error, stdout, stderr) => {
        if (error) {
            return {
                success: false,
                message: error.message
            }
        }

        if (stderr) {
            return {
                success: false,
                message: stderr
            }
        }

        return {
            success: true,
            message: stdout
        }
    });
    return {
        success: true,
        message: "Executed Successfully"
    }
}