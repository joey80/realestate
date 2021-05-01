import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INPUT } from 'src/actions/constants';
import Input from 'src/components/Input';
import InputError from 'src/components/InputError';
import { checkValidZip } from 'src/utils/Helper';
import { RootState } from 'src/reducers';
import { SearchLocation } from 'src/reducers/Input/types';
import './styles.scss';

const InputContainer = ({
  errorMessage,
  label,
  name,
  type,
}: {
  errorMessage: string;
  label: keyof SearchLocation;
  name: string;
  type: string;
}) => {
  const dispatch = useDispatch();
  const errors = useSelector((state: RootState) => state.Input.errors);
  const input = useSelector((state: RootState) => state.Input.searchLocation);

  // TODO: clean this up
  const handleBlur = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    // Check for blank values
    target.value === ''
      ? dispatch({ type: INPUT.SHOW_INPUT_ERROR, errorName: label })
      : dispatch({ type: INPUT.HIDE_INPUT_ERROR, errorName: label });

    // Validate zip code
    if (label === 'zipCode' && target.value !== '') {
      const valid = checkValidZip(target.value);

      valid === false
        ? dispatch({ type: INPUT.SHOW_INPUT_ERROR, errorName: label })
        : dispatch({ type: INPUT.HIDE_INPUT_ERROR, errorName: label });
    }
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: INPUT.SAVE_VALUE, stateName: label, stateValue: target.value });
  };

  return (
    <div className='input-container__group'>
      <label htmlFor={label}>{name}</label>
      <Input
        value={input[label] === null ? '' : input[label]}
        type={type}
        onChange={handleChange}
        onBlur={handleBlur}
        name={label}
        error={errors[label]}
      />
      <InputError error={errors[label]} errorMessage={errorMessage} />
    </div>
  );
};

export default InputContainer;
