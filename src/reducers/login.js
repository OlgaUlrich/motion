const initialState = {
    user: null,
    token: null,
    authenticated: false
};

const loginUser = (state = initialState, action) => {

    switch (action.type) {
        case 'signIn':
            // console.log('in reducer', action.payload);
            const newState = { ...state };
            newState.token = action.payload.token;
            newState.user = action.payload.user;
            newState.authenticated = true
            // console.log('in sign in', newState.token);
            return newState;
        case 'signUp':
            return state

        // case 'signOut':
        //     let newState = [...state]

        //     return newState;

        default:
            return state
    }

}

export default loginUser

// export const userLoginReducer = (state = initialState, action) => {

//     switch (action.type) {
//       case USER_LOGIN: {
//         return {
//           user: action.payload.user.user,
//           token: action.payload.user.access,
//           authenticated: action.payload.authenticated
//         };
//       }
//       case USER_LOGOUT: {
//         return {
//           user: null,
//           token: null,
//           authenticated: false
//         };
//       }
//       default:
//         return state;
//     }
//   };
