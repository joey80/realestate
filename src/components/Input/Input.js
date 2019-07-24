import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputError from '../InputError/InputError';
import { checkValidZip } from '../Form/Helper';
import './Input.scss';

const mapStateToProps = state => ({
    errors: state.Input.errors,
    searchLocation: state.Input.searchLocation
});

const mapDispatchToProps = dispatch => ({
    showError: name => dispatch({ type: 'SHOW_INPUT_ERROR', errorName: name }),
    hideError: name => dispatch({ type: 'HIDE_INPUT_ERROR', errorName: name }),
    saveValue: (name, value) => dispatch({ type: 'SAVE_VALUE', stateName: name, stateValue: value })
});

export const Input = props => {

    const checkValue = target => {
      
        // Check for blank values
        if (target.value === '' ? props.showError(props.label) : props.hideError(props.label));
      
        // Validate zip code
        if (props.label === 'zipCode' && target.value !== '') {
          const valid = checkValidZip(target.value);
          if (valid === false ? props.showError(props.label) : props.hideError(props.label));
        } 
    };
    
    return (
        <div className="form__group">
            <label htmlFor={ props.label }>{ props.name }</label>
            <input
                type={ props.type }
                onChange={ e => { props.saveValue(props.label, e.target.value) }}
                onBlur={ e => { checkValue(e.target) }}
                className="form__field"
                name={ props.label }
            />
            <InputError
                error={ props.errors[props.label] }
                errorMessage={ props.errorMessage }
            />
        </div>
    );
};

Input.propTypes = {
    showError: PropTypes.func,
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    hideError: PropTypes.func,
    saveValue: PropTypes.func,
    errors: PropTypes.object,
    errorMessage: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);