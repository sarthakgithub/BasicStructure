import React from 'react';
import {render} from 'react-dom';
import {sampleQuestions} from '../constants/constants';
import _ from 'lodash';

class AccordionItem extends React.Component{
    constructor(){
        super();
        this.state = {
            isActive : false
        };
        this.toggleState = this.toggleState.bind(this);
    }

    toggleState(){
        this.setState({isActive : !this.state.isActive})
    }

    render(){
        const question = this.props.details;
        return(
          <div>
            <div onClick={this.toggleState}>{question.summary}</div>
            <div className={this.state.isActive?"show":"hide"}>{question.answer}</div>
          </div>
        )
    }
}

export default AccordionItem;