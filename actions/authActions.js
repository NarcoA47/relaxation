export const signIn = (user, token) => ({
    type: 'SIGN_IN',
    payload: { user, token },
  });
  
  export const signOut = () => ({
    type: 'SIGN_OUT',
  });
  