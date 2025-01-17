import { CommandParser } from '../client/parser';
import { SimpleStringReply, Command } from '../RESP/types';

interface FailoverOptions {
  TO?: {
    host: string;
    port: number;
    FORCE?: true;
  };
  ABORT?: true;
  TIMEOUT?: number;
}

export default {
  parseCommand(parser: CommandParser, options?: FailoverOptions) {
    parser.push('FAILOVER');

    if (options?.TO) {
      parser.push('TO', options.TO.host, options.TO.port.toString());

      if (options.TO.FORCE) {
        parser.push('FORCE');
      }
    }

    if (options?.ABORT) {
      parser.push('ABORT');
    }

    if (options?.TIMEOUT) {
      parser.push('TIMEOUT', options.TIMEOUT.toString());
    }
  },
  transformReply: undefined as unknown as () => SimpleStringReply
} as const satisfies Command;
