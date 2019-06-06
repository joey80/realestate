import React, { Component } from 'react';
import './Input.scss';

class Input extends Component {

    render() {
        return (
            <div className="form__group">
                <label htmlFor={this.props.label}>{this.props.name}</label>
                <input type={this.props.type} onChange={this.props.onChange} onBlur={this.props.onBlur} className="form__field" name={this.props.label} />
                <span className="form__error__message">{this.props.children}</span>
            </div>
        );
    }
}

export default Input;