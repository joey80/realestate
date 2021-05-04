import React from 'react';
import './styles.scss';

interface SelectType extends React.InputHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
  options: React.ReactNode;
}

const Select = ({ defaultValue, error, options, ...rest }: SelectType) => (
  <select className={`select ${error ? 'select--error' : ''}`} {...rest}>
    <option disabled value={defaultValue}>
      {defaultValue}
    </option>
    {options}
  </select>
);

export default Select;
