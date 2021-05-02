import React from 'react';
import './styles.scss';

interface InputType extends React.InputHTMLAttributes<HTMLInputElement> {
  error: boolean;
}

const Input = ({ error, ...rest }: InputType) => (
  <input {...rest} className={`input__field ${error ? 'input__field--error' : ''}`} type='text' />
);

export default Input;
