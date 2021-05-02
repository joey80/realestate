import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INPUT } from 'src/actions/constants';
import Input from 'src/components/Input';
import InputError from 'src/components/InputError';
import { hasValidZipcode } from 'src/utils/Helper';
import { RootState } from 'src/reducers';
import { InputContainerType } from './types';
import './styles.scss';

const InputContainer = ({ errorMessage, label, name, ...rest }: InputContainerType) => {
  const dispatch = useDispatch();
  const errors = useSelector((state: RootState) => state.Input.errors);
  const input = useSelector((state: RootState) => state.Input.searchLocation);

  // Check for blank values
  const handleIfBlankValue = (str: string) => {
    if (str === '') {
      dispatch({ type: INPUT.SHOW_INPUT_ERROR, errorName: label });
    } else {
      dispatch({ type: INPUT.HIDE_INPUT_ERROR, errorName: label });
    }
  };

  // Validate zip code
  const handleValidZip = (str: string) => {
    if (hasValidZipcode(str)) {
      dispatch({ type: INPUT.HIDE_INPUT_ERROR, errorName: label });
    } else {
      dispatch({ type: INPUT.SHOW_INPUT_ERROR, errorName: label });
    }
  };

  const handleBlur = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    handleIfBlankValue(value);

    if (label === 'zipCode' && value !== '') {
      handleValidZip(value);
    }
  };

  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: INPUT.SAVE_VALUE, stateName: label, stateValue: value });
  };

  return (
    <div className='input-container__group'>
      <label htmlFor={label}>{name}</label>
      <Input
        error={errors[label]}
        name={label}
        onBlur={handleBlur}
        onChange={handleChange}
        value={input[label] === null ? '' : input[label]}
        {...rest}
      />
      <InputError error={errors[label]} {...{ errorMessage }} />
    </div>
  );
};

export default InputContainer;
