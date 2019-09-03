import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../../components/Input/Input';
import InputError from '../../components/InputError/InputError';
import { checkValidZip } from '../../utils/Helper';
import './InputContainer.scss';

const InputContainer = props => {

    const dispatch = useDispatch();
    const errors = useSelector(state => state.Input.errors);
    const input = useSelector(state => state.Input.searchLocation);

    const checkValue = target => {
        // Check for blank values
        if (target.value === '' ?
            dispatch({ type: 'SHOW_INPUT_ERROR', errorName: props.label }) :
            dispatch({ type: 'HIDE_INPUT_ERROR', errorName: props.label })
        );
      
        // Validate zip code
        if (props.label === 'zipCode' && target.value !== '') {
            const valid = checkValidZip(target.value);
            if (valid === false ?
                dispatch({ type: 'SHOW_INPUT_ERROR', errorName: props.label }) :
                dispatch({ type: 'HIDE_INPUT_ERROR', errorName: props.label })
            );
        } 
    };
    
    return (
        <div className="input-container__group">
            <label htmlFor={ props.label }>{ props.name }</label>
            <Input
                value={ (input[props.label] === null ? '' : input[props.label]) }
                type={ props.type }
                onChange={ e => { dispatch({ type: 'SAVE_VALUE', stateName: props.label, stateValue: e.target.value }) }}
                onBlur={ e => { console.log('does THIS fire?'); checkValue(e.target) }}
                name={ props.label }
            />
            <InputError
                error={ errors[props.label] }
                errorMessage={ props.errorMessage }
            />
        </div>
    );
};

InputContainer.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    errors: PropTypes.object,
    errorMessage: PropTypes.string
};

export default InputContainer;