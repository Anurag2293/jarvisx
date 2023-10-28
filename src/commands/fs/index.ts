import {Args, Command, Flags} from '@oclif/core';
import chalk from 'chalk';
import { main } from '../../controllers/ai/index.js';

export default class FS extends Command {
    static args = {
        prompt: Args.string({description: 'Ask AI to do any task', required: true}),
    }

    static flag = {
        from: Flags.string({char: 'f', description: 'Who is saying hello', required: true}),
    }

    async run(): Promise<void> {
        const {args, flags} = await this.parse(FS);
        const {success, message} = await main(args);
        if (success) {
            this.log(chalk.green.bold("SUCCESS: ") + message);
        } else {
            this.log(chalk.red.bold("ERROR: ") + message);
        }
    }
}