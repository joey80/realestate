import React from 'react';
import { states } from '../Form/Helper';
import './Select.scss';

const Select = props => {
    return (
        <select defaultValue={"Select A State"} onChange={props.onChange}>
            <option value="Select A State" disabled="disabled">Select A State</option>
            {states.names.map(name => {
                return (
                    <option key={name} value={name}>{name}</option>
                );
            })}
        </select>
    );
};

export default Select;