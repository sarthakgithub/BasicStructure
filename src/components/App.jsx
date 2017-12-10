import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch, Redirect, browserHistory} from "react-router-dom";
import HomeContainer from '../containers/homeContainer.js';
import LoginContainer from '../containers/loginContainer.js';
import LogoutContainer from '../containers/logoutContainer.js';


class App extends React.Component{
    render(){
        return(
            <Router>
            	<Switch>
                    <Redirect exact from="/" to="/login" />                    
                    <Route path="/login" component={LoginContainer} />
            		<Route path="/home" component={HomeContainer} />
            	</Switch>
            </Router>
        );
    }
}

export default App;