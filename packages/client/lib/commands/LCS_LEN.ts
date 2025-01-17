import { NumberReply, Command } from '../RESP/types';
import LCS from './LCS';

export default {
  IS_READ_ONLY: LCS.IS_READ_ONLY,
  parseCommand(...args: Parameters<typeof LCS.parseCommand>) {
    const parser = args[0];

    LCS.parseCommand(...args);
    parser.push('LEN');
  },
  transformReply: undefined as unknown as () => NumberReply
} as const satisfies Command;
