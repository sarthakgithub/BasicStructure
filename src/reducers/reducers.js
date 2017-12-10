const DEFAULT_STATE = { isLogin: ''};

const rootReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'LOGIN_STATE':
            return Object.assign({}, state, { isLogin: action.loginInfo.isLogin });;

        default:
            return state;
    }
};

export default rootReducer;
