const DEFAULT_STATE = { isLogin: ''};

const rootReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'LOGIN_STATE':
            return Object.assign({}, state, { isLogin: action.loginInfo.isLogin });;
        case 'LOG_OUT':
        	return Object.assign({},state, {isLogin : false})
        default:
            return state;
    }
};

export default rootReducer;
