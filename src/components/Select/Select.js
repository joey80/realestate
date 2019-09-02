import React from 'react';
import './Select.scss';

const Select = props => (
    
    <select
        value={ props.value }
        onChange={ props.onChange }>
        { props.value === props.setDefaultValue ?
            <option value={ props.setDefaultValue } disabled="disabled">{ props.setDefaultValue }</option> :
            null
        }
        { props.options }
    </select>
);

export default Select;