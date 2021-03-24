import React from 'react';
import PropTypes from 'prop-types';
import './InputError.scss';

const InputError = ({ error, errorMessage }) =>
  error ? (
    <span className='inputError__message'>{errorMessage}</span>
  ) : (
    <span className='inputError__message' />
  );

InputError.propTypes = {
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default InputError;
