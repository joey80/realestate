import React from 'react';
import './Select.scss';

interface SelectType extends React.InputHTMLAttributes<HTMLSelectElement> {
  error: boolean;
  options: any;
}

const Select = ({ error, options, ...rest }: SelectType) => (
  <select className={error ? 'select select--error' : 'select'} {...rest}>
    <option disabled value='Select A State'>
      Select A State
    </option>
    {options}
  </select>
);

export default Select;
