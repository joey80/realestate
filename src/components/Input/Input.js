import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import InputError from '../InputError/InputError';
import { checkValidZip } from '../Form/Helper';
import './Input.scss';

export const Input = props => {

    const dispatch = useDispatch();
    const errors = useSelector(state => state.Input.errors);

    const checkValue = target => {
        // Check for blank values
        if (target.value === '' ? dispatch({ type: 'SHOW_INPUT_ERROR', errorName: props.label }) : dispatch({ type: 'HIDE_INPUT_ERROR', errorName: props.label }));
      
        // Validate zip code
        if (props.label === 'zipCode' && target.value !== '') {
          const valid = checkValidZip(target.value);
          if (valid === false ? dispatch({ type: 'SHOW_INPUT_ERROR', errorName: props.label }) : dispatch({ type: 'HIDE_INPUT_ERROR', errorName: props.label }));
        } 
    };
    
    return (
        <div className="form__group">
            <label htmlFor={ props.label }>{ props.name }</label>
            <input
                type={ props.type }
                onChange={ e => { dispatch({ type: 'SAVE_VALUE', stateName: props.label, stateValue: e.target.value }) }}
                onBlur={ e => { checkValue(e.target) }}
                className="form__field"
                name={ props.label }
            />
            <InputError
                error={ errors[props.label] }
                errorMessage={ props.errorMessage }
            />
        </div>
    );
};

Input.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    errors: PropTypes.object,
    errorMessage: PropTypes.string
};

export default Input;