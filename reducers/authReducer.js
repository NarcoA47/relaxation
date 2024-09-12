const initialState = {
    user: null,
    token: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SIGN_IN':
        return {
          ...state,
          user: action.payload.user,
          token: action.payload.token,
        };
      case 'SIGN_OUT':
        return {
          ...state,
          user: null,
          token: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  