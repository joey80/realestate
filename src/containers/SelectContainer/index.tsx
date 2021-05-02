import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INPUT } from 'src/actions/constants';
import Select from 'src/components/Select';
import InputError from 'src/components/InputError';
import { states } from 'src/utils/Helper';
import { RootState } from 'src/reducers';
import { SelectContainerType } from './types';
import './styles.scss';

const SelectContainer = ({ defaultValue, errorMessage, label, value }: SelectContainerType) => {
  const dispatch = useDispatch();
  const errors = useSelector((state: RootState) => state.Input.errors);
  const { names: stateNames } = states;

  const handleBlur = ({ target: { value } }: React.FocusEvent<HTMLSelectElement>) => {
    // Check for blank values
    if (value === defaultValue) {
      dispatch({ type: INPUT.SHOW_INPUT_ERROR, errorName: label });
    } else {
      dispatch({ type: INPUT.HIDE_INPUT_ERROR, errorName: label });
    }
  };

  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: INPUT.SAVE_VALUE, stateName: 'state', stateValue: value });
  };

  return (
    <>
      <Select
        error={errors[label]}
        onBlur={handleBlur}
        onChange={handleChange}
        options={stateNames.map(name => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
        {...{ defaultValue, value }}
      />
      <InputError error={errors[label]} {...{ errorMessage }} />
    </>
  );
};

export default SelectContainer;
