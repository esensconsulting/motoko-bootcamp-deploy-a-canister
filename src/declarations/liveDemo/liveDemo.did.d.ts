import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'getLastGreetedPerson' : () => Promise<string>,
  'greet' : (arg_0: string) => Promise<string>,
}
