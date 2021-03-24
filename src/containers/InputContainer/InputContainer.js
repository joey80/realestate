import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { INPUT } from '../../actions/constants';
import Input from '../../components/Input/Input';
import InputError from '../../components/InputError/InputError';
import { checkValidZip } from '../../utils/Helper';
import './InputContainer.scss';

const InputContainer = ({ errorMessage, label, name, type }) => {
  const dispatch = useDispatch();
  const errors = useSelector(state => state.Input.errors);
  const input = useSelector(state => state.Input.searchLocation);

  const checkValue = target => {
    // Check for blank values
    if (
      target.value === ''
        ? dispatch({ type: INPUT.SHOW_INPUT_ERROR, errorName: label })
        : dispatch({ type: INPUT.HIDE_INPUT_ERROR, errorName: label })
    );

    // Validate zip code
    if (label === 'zipCode' && target.value !== '') {
      const valid = checkValidZip(target.value);

      if (
        valid === false
          ? dispatch({ type: INPUT.SHOW_INPUT_ERROR, errorName: label })
          : dispatch({ type: INPUT.HIDE_INPUT_ERROR, errorName: label })
      );
    }
  };

  return (
    <div className='input-container__group'>
      <label htmlFor={label}>{name}</label>
      <Input
        value={input[label] === null ? '' : input[label]}
        type={type}
        onChange={e => {
          dispatch({ type: INPUT.SAVE_VALUE, stateName: label, stateValue: e.target.value });
        }}
        onBlur={e => {
          checkValue(e.target);
        }}
        name={label}
        error={errors[label]}
      />
      <InputError error={errors[label]} errorMessage={errorMessage} />
    </div>
  );
};

InputContainer.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  errorMessage: PropTypes.string,
};

export default InputContainer;
