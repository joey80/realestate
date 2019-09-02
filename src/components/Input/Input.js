import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = props => (

    <input
        value={ props.value }
        type={ props.type }
        onChange={ props.onChange }
        onBlur={ props.onChange }
        className="input__field"
        name={ props.label }
    />
);

Input.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string
};

export default Input;