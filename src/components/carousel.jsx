import React from 'react';
import {render} from 'react-dom';
import {sampleQuestions} from '../constants/constants';
import AccordionItem from './accordionItem.jsx'
import _ from 'lodash';
import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Carousel extends React.Component {
    constructor() {
        super();
        this.state = {
            imageUrl: [image1, image2, image3],
            counter: 0,
            isNext: false
        };
        this.prevHandler = this.prevHandler.bind(this);
        this.nextHandler = this.nextHandler.bind(this);
    }

    prevHandler() {
        if (this.state.counter > 0) {
            this.setState({
                counter: this.state.counter - 1,
                isNext: false
            })
        }
        if (this.state.counter <= 0) {
            this.setState({
                counter: 2,
                isNext: false
            })
        }
    }

    nextHandler() {
        if (this.state.counter < 2) {
            this.setState({
                counter: this.state.counter + 1,
                isNext: true
            })
        }
        if (this.state.counter >= 2) {
            this.setState({
                counter: 0,
                isNext: true
            })
        }
    }

    render() {
        const ImageToShow = this.state.imageUrl[this.state.counter];
        console.log('counter value', this.state.counter);
        return (
            <div>
                <ReactCSSTransitionGroup
                    transitionName={{
                        enter: this.state.isNext ? 'enter-next' : 'enter-prev',
                        enterActive: 'enter-active',
                        leave: 'leave',
                        leaveActive: this.state.isNext ? 'leave-active-next' : 'leave-active-prev'
                      }}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                    <div className="imageContainer" key={Math.random()}>
                        <img src={ImageToShow}/>
                    </div>
                </ReactCSSTransitionGroup>
                <input type="button" value="prev" className="prevBtn" onClick={this.prevHandler}/>
                <input type="button" value="next" className="nextBtn" onClick={this.nextHandler}/>
            </div>
        )
    }
}

export default Carousel;
