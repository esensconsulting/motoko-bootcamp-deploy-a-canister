export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getGreetCount' : IDL.Func([], [IDL.Nat], []),
    'getLastGreetedPerson' : IDL.Func([], [IDL.Text], []),
    'greet' : IDL.Func([IDL.Text], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
