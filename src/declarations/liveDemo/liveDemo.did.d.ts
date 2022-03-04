import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'getGreetCount' : () => Promise<bigint>,
  'getLastGreetedPerson' : () => Promise<string>,
  'greet' : (arg_0: string) => Promise<string>,
}
