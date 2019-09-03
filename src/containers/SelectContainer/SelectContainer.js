import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from '../../components/Select/Select';
import { states } from '../../utils/Helper';
import './SelectContainer.scss';

const SelectContainer = props => {

    const dispatch = useDispatch();
    const errors = useSelector(state => state.Input.errors);
    const { defaultOption } = props;

    const checkValue = target => {
        // Check for blank values
        if (target.value === defaultOption ?
            dispatch({ type: 'SHOW_INPUT_ERROR', errorName: props.label }) :
            dispatch({ type: 'HIDE_INPUT_ERROR', errorName: props.label })
        );
    };

    return (
        <Select
            value={ props.value }
            setDefaultValue={ defaultOption }
            onBlur={ e => { checkValue(e.target) }}
            error={ errors[props.label] }
            onChange={ e => { dispatch({ type: 'SAVE_VALUE', stateName: 'state', stateValue: e.target.value }) }}
            options={ states.names.map(name => (<option key={ name } value={ name }>{ name }</option>)) }
        />
    );
};

export default SelectContainer;