import {Args, Command, Flags} from '@oclif/core';

import { main } from '../../controllers/code/index.js';

export default class Code extends Command {
    static args = {
        prompt: Args.string({description: 'Ask AI to do any compiling or interpreting task', required: true}),
    }
    
    async run(): Promise<void> {
        const {args} = await this.parse(Code);

        console.log(process.env.OPENAI_API_KEY);

        await main(args);
        // if (success) {
        //     this.log(message);
        // } else {
        //     this.log(message);
        // }
    }
}