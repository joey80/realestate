import React from 'react';
import { states } from '../Form/Helper';
import './Select.scss';

const Select = props => {
    return (
        <select onChange={props.onChange}>
            <option selected="true" value="" disabled="disabled">Select A State</option>
            {states.names.map(name => {
                return (
                    <option key={name} value={name}>{name}</option>
                );
            })}
        </select>
    );
};

export default Select;