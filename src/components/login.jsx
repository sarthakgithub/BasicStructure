import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class Login extends React.Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state= {
			username : '',
			password : ''
		}
	}

	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

	    this.setState({
	    	[name] : value
	    });
	}

	handleSubmit(e){
		e.preventDefault();
		const userinfo = {
			username : this.state.username,
			password : this.state.password
		}
		this.props.loginInfo(userinfo);
		if(this.props.isLogin){
			this.props.historyObj.history.push("/home");
		}
	}

	render(){
		return(
			<form onSubmit={this.handleSubmit}>
		        <label>
		          Name:
		          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
		        </label>

		        <label>
		          Password:
		          <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
		        </label>

		        <input type="submit" value="Submit" />
		    </form>
		)
	}
}

export default Login;