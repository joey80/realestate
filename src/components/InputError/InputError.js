import React from 'react';
import './InputError.scss';

const InputError = props => {
    if (props.error === false) {
        return <span className="inputError__message"></span>
    } else {
        return <span className="inputError__message">{props.errorMessage}</span>
    }
};

export default InputError;