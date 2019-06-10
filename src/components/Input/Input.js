import React from 'react';
import InputError from '../InputError/InputError';
import './Input.scss';

const Input = props => {
    return (
        <div className="form__group">
            <label htmlFor={props.label}>{props.name}</label>
            <input type={props.type} onChange={props.onChange} onBlur={props.onBlur} className="form__field" name={props.label} />
            <InputError errors={props.errors} errorMessage={props.errorMessage}></InputError>
        </div>
    );
};

export default Input;