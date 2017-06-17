import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.m.less';

import classNames from 'classnames';

class Input extends Component {
    static propTypes = {
        type: PropTypes.string,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        isError: PropTypes.bool,
        placeholder: PropTypes.string,
        onChange: PropTypes.func.isRequired
    };
    render() {
        const wrapperClasses = classNames(
            style.input, { [style['input--error']]: this.props.isError }
        );
        return (<div className={wrapperClasses}>
            <div className={style.icon}>
                {this.props.children}
            </div>
            <input 
                type={this.props.type} 
                placeholder={this.props.placeholder} 
                onChange={this.props.onChange}
                value={this.props.value}
            />
        </div>);
    }
}

export default Input;