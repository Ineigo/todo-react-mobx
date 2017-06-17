import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import css from './style.m.less';

const cx = classNames.bind(css);

class Checkbox extends React.Component {
    onClick = () => {
        if(this.props.readOnly) {
            return;
        }

        const value = !this.props.value;
        this.props.onChange(value);
    }

    render() {
        const className = cx({
            checkbox: true,
            checked: this.props.value
        });
        return (
            <div className={className} onClick={this.onClick} readOnly={this.props.readOnly}></div>
        );
    }
}

Checkbox.propTypes = {
    value: PropTypes.bool,
    readOnly: PropTypes.bool,
    onChange: PropTypes.func
};

Checkbox.defaultProps = {
    value: false,
    readOnly: false,
    onChange: () => {}
};

export default Checkbox;