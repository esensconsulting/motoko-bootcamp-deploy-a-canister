export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getLastGreetedPerson' : IDL.Func([], [IDL.Text], []),
    'greet' : IDL.Func([IDL.Text], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
