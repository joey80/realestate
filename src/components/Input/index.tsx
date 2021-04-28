import React from 'react';
import './styles.scss';

interface InputType extends React.InputHTMLAttributes<HTMLInputElement> {
  error: boolean;
}

const Input = ({ error, ...rest }: InputType) => (
  <input {...rest} className={error ? 'input__field input__field--error' : 'input__field'} />
);

export default Input;
