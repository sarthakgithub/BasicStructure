import { connect } from 'react-redux';
import LoginParent from '../components/loginParent.jsx';
import {userinfo} from '../actioncreators/actionCreators.js';

const mapStateToProps = (state) => ({
    isLogin : state.isLogin
});

const mapDispatchToProps = (dispatch) => ({
    loginInfo(loginInfo){
    	dispatch(userinfo(loginInfo));
    }
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginParent);

export default LoginContainer;