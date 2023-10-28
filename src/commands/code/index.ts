import {Args, Command, Flags} from '@oclif/core';
import chalk from 'chalk';

import { main } from '../../controllers/code/index.js';

export default class Code extends Command {
    static args = {
        prompt: Args.string({description: 'Ask AI to do any compiling or interpreting task', required: true}),
    }
    
    async run(): Promise<void> {
        const {args} = await this.parse(Code);

        const { success, message } = await main(args);
        if (success) {
            this.log(chalk.green.bold("SUCCESS: "), message);
        } else {
            this.log(chalk.red.bold("ERROR: "), message);
        }
    }
}