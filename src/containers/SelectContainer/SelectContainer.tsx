import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INPUT } from '../../actions/constants';
import Select from '../../components/Select/Select';
import InputError from '../../components/InputError/InputError';
import { states } from '../../utils/Helper';
import { RootState } from '../../reducers/index';
import './SelectContainer.scss';

const SelectContainer = ({
  defaultOption,
  errorMessage,
  label,
  value,
}: {
  defaultOption: string;
  errorMessage: string;
  label: string;
  value: string;
}) => {
  const dispatch = useDispatch();
  const errors = useSelector((state: RootState) => state.Input.errors);

  const handleBlur = ({ target }: React.FocusEvent<HTMLSelectElement>) => {
    // TODO: clean this up
    // Check for blank values
    target.value === defaultOption
      ? dispatch({ type: INPUT.SHOW_INPUT_ERROR, errorName: label })
      : dispatch({ type: INPUT.HIDE_INPUT_ERROR, errorName: label });
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: INPUT.SAVE_VALUE, stateName: 'state', stateValue: target.value });
  };

  return (
    <>
      <Select
        value={value}
        onBlur={handleBlur}
        error={errors[label]}
        onChange={handleChange}
        options={states.names.map(name => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      />
      <InputError error={errors[label]} errorMessage={errorMessage} />
    </>
  );
};

export default SelectContainer;
