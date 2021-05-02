import React from 'react';
import './styles.scss';

interface SelectType extends React.InputHTMLAttributes<HTMLSelectElement> {
  error: boolean;
  options: any;
}

const Select = ({ defaultValue, error, options, ...rest }: SelectType) => (
  <select className={error ? 'select select--error' : 'select'} {...rest}>
    <option disabled value={defaultValue}>
      {defaultValue}
    </option>
    {options}
  </select>
);

export default Select;
