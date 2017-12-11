import React from 'react';
import { connect } from 'react-redux';
import Home from '../components/home.jsx';
import Logout from '../components/logout.jsx';
import {userinfo,userloggingout} from '../actioncreators/actionCreators.js';

class ParentHome extends React.Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		if(this.props.isLogin){
			localStorage.setItem("loginStatus", "true");
		}
	}

	render(){
		return(
			<div>
				<Home />
				<Logout {...this.props} />
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
    isLogin : state.isLogin
});

const mapDispatchToProps = (dispatch) => ({
    loggingout(){
    	dispatch(userloggingout());
    }
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(ParentHome);

export default HomeContainer;