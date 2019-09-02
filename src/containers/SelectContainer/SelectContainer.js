import React from 'react';
import { useDispatch } from 'react-redux';
import Select from '../../components/Select/Select';
import { states } from '../../utils/Helper';
import './SelectContainer.scss';

const SelectContainer = props => {

    const dispatch = useDispatch();

    return (
        <Select
            value={ props.value }
            setDefaultValue='Select A State'
            onChange={ e => { dispatch({ type: 'SAVE_VALUE', stateName: 'state', stateValue: e.target.value }) }}
            options={ states.names.map(name => (<option key={ name } value={ name }>{ name }</option>)) }
        />
    );
};

export default SelectContainer;