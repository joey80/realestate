import React from 'react';
import './InputError.scss';

const InputError = ({ error, errorMessage }: { error: boolean; errorMessage: string }) => (
  <span className='inputError__message'>{error ? errorMessage : ''}</span>
);

export default InputError;
