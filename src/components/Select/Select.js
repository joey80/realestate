import React from 'react';
import './Select.scss';

const Select = props => (
    
    <select
        value={ props.value }
        defaultValue={ props.defaultValue }
        onChange={ props.onChange }>
        { props.defaultValue ?
            <option value={ props.defaultValue } disabled="disabled">{ props.defaultValue }</option> :
            null
        }
        { props.options }
    </select>
);

export default Select;