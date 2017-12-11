import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class Logout extends React.Component{
	constructor(props){
		super(props);
		this.loggingOut = this.loggingOut.bind(this);
	}

	loggingOut(){
		this.props.loggingout();
		if(localStorage.getItem("loginStatus")){
			this.props.history.push('/login');
			localStorage.removeItem("loginStatus");
		}
	}

	render(){
		return(
			<input type="button" value="logout" onClick={this.loggingOut} />
		)
	}
}

export default Logout;