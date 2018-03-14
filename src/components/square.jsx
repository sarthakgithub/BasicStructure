import React from 'react';
import {render} from 'react-dom';
import AccordionItem from './accordionItem.jsx'
import _ from 'lodash';

class Square extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <button className="square" onClick={this.props.onClick}>
                {this.props.value}
            </button>
        )
    }
}

export default Square;
