import React from 'react';
import {render} from 'react-dom';
import {sampleQuestions} from '../constants/constants';
import AccordionItem from './accordionItem.jsx'
import _ from 'lodash';

class Accordion extends React.Component{
    constructor(){
        super();
        this.state = {
            questions : sampleQuestions
        };
        this.renderQuestion = this.renderQuestion.bind(this);
    }

    renderQuestion(key){
        return <AccordionItem key={key} index={key} details={this.state.questions[key]} />
    }

    render(){
        return(
            <div>{Object.keys(this.state.questions).map(this.renderQuestion)}</div>
        )
    }
}

export default Accordion;
