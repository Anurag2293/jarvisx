import {Args, Command} from '@oclif/core';
import { main } from '../../controllers/do/index.js';

export default class Do extends Command {
    static description = 'describe the command here';

    static args = {
        prompt: Args.string({required: true})
    }

    async run(): Promise<void> {
        const { args } = await this.parse(Do);
        await main(args);
    }
}