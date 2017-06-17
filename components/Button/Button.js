import React from 'react';
import PropTypes from 'prop-types';
import style from './style.m.less';
import classNames from 'classnames';

class MdButton extends React.Component {
    static propTypes = {
        type: PropTypes.string,
        title: PropTypes.string,
        className: PropTypes.string,
        size: PropTypes.string,
        disabled: PropTypes.bool,
        fontWeight: PropTypes.string,
        onClick: PropTypes.func.isRequired,
        onMouseLeave: PropTypes.func,
        widthStyle: PropTypes.string,
        extraClasses: PropTypes.string
    };

    getLoaderColor() {
        let color = '#000';
        const type = this.props.type;
        if (type === 'submit' || type === 'delete') {
            color = '#fff';
        }
        return color;
    }



    render() {
        const buttonClass = this._getClassNamesForButton();
        const titleSpanClass = this._getClassNamesForTitle();
        const wrapperDivClass = this._getClassNamesForWrapper();
        return (
            <div className={wrapperDivClass}>
                <button className={buttonClass} type='button' onClick={this._onClickButton} onMouseLeave={this._onMouseLeave}>
                    <span className={titleSpanClass}>{this.props.title}</span>
                </button>
            </div>
        );
    }

    _onClickButton = e => {
        !this.props.disabled && this.props.onClick(e);
    };

    _onMouseLeave = e => {
        if (!this.props.disabled && this.props.onMouseLeave) {
            this.props.onMouseLeave(e);
        }
    };

    _getClassNamesForButton() {
        return classNames(
            style['button__body'], {
                [style[`button--${this.props.size}`]]: this.props.size,
                [style[`button--${this.props.type}`]]: this.props.type,
                [style['button__body--loading']]: this.props.loading
            }
        );
    }

    _getClassNamesForTitle() {
        return classNames(style['button__title'], {
            [style[`button__title--${this.props.iconStyle}`]]: this.props.iconStyle,
            [style['button__title--normalFont']]: this.props.fontWeight === 'normal'
        });
    }

    _getClassNamesForWrapper() {
        return classNames(style['button'], {
            [style['button--disabled']]: this.props.disabled && !this.props.loading,
            [style[`button--${this.props.widthStyle}`]]: this.props.widthStyle,
            [this.props.className]: this.props.className
        });
    }
}

export default MdButton;