import React from 'react';
import {render} from 'react-dom';
import Board from './board.jsx'
import _ from 'lodash';

class Tic extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <Board />
            </div>
        )
    }
}

export default Tic;
