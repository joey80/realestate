import React from 'react';
import PropTypes from 'prop-types';
import './InputError.scss';

const InputError = props => {
    return (props.error ?
        <span className="inputError__message">{ props.errorMessage }</span> :
        <span className="inputError__message" />
    );
};

InputError.propTypes = {
    error: PropTypes.bool,
    errorMessage: PropTypes.string
}

export default InputError;