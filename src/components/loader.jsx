import React from 'react';
import {render} from 'react-dom';
import classNames from 'classnames';
import defaultImg from 'assets/images/default.gif';

class Loader extends React.Component {
    render() {
        const loaderClass = classNames({ 'loader': true, 'hide': !this.props.isLoading });
        return (
            <div className={loaderClass}>
                <img src={defaultImg}/>
            </div>
        );
    }
}