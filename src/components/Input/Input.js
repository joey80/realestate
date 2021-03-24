import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({ error, label, ...rest }) => (
  <input
    name={label}
    className={error ? 'input__field input__field--error' : 'input__field'}
    {...rest}
  />
);

Input.propTypes = {
  error: PropTypes.bool,
  label: PropTypes.string,
};

export default Input;
