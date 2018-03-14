const DEFAULT_STATE = { isLogin: '', isLoading: false};

const rootReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'LOGIN_STATE':
            return Object.assign({}, state, { isLogin: action.loginInfo.isLogin });
        case 'LOG_OUT':
        	return Object.assign({},state, {isLogin : false});
        case 'showLoader':
        	return Object.assign({},state, {isLoading: true});
        case 'hideLoader':
        	return Object.assign({},state, {isLoading: false});
        default:
            return state;
    }
};

export default rootReducer;
