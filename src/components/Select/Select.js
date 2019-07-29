import React from 'react';
import { useDispatch } from 'react-redux';
import { states } from '../Form/Helper';
import './Select.scss';

const Select = () => {

    const dispatch = useDispatch();

    return (
        <select
            defaultValue="Select A State"
            onChange={ e => { dispatch({ type: 'SAVE_VALUE', stateName: 'state', stateValue: e.target.value }) }}>
            <option value="Select A State" disabled="disabled">Select A State</option>
            { states.names.map(name => (
                <option key={name} value={name}>{name}</option>
            )) }
        </select>
    );
};

export default Select;