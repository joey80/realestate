import React from 'react';
import PropTypes from 'prop-types';
import './InputError.scss';

const InputError = props => {
    let renderDOM;

    if (props.error === false) {
        renderDOM = <span className="inputError__message" />
    } else {
        renderDOM = <span className="inputError__message">{ props.errorMessage }</span>
    }
    return renderDOM;
};

InputError.propTypes = {
    error: PropTypes.bool,
    errorMessage: PropTypes.string
}

export default InputError;