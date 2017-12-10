import React from 'react';
import {render} from 'react-dom';
import Login from './login.jsx';
import Home from './home.jsx';

class LoginParent extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
				<Login loginInfo={this.props.loginInfo} historyObj={this.props} isLogin={this.props.isLogin}
				/>
			</div>
		)
	}
}

export default LoginParent;