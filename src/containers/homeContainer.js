import { connect } from 'react-redux';
import Home from '../components/home.jsx';
import {userinfo} from '../actioncreators/actionCreators.js';

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = (dispatch) => ({
    
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;