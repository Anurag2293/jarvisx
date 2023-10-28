import {Args, Command, Flags} from '@oclif/core';
import { main } from '../../controllers/ai/index.js';

export default class AI extends Command {
    static args = {
        prompt: Args.string({description: 'Ask AI to do any task', required: true}),
    }

    static flag = {
        from: Flags.string({char: 'f', description: 'Who is saying hello', required: true}),
    }

    async run(): Promise<void> {
        const {args, flags} = await this.parse(AI);
        const response = await main(args);
        this.log(response);
    }
}