import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { INPUT } from '../../actions/constants';
import Select from '../../components/Select/Select';
import InputError from '../../components/InputError/InputError';
import { states } from '../../utils/Helper';
import './SelectContainer.scss';

const SelectContainer = ({ defaultOption, errorMessage, label, value }) => {
  const dispatch = useDispatch();
  const errors = useSelector(state => state.Input.errors);

  const checkValue = target => {
    // Check for blank values
    if (
      target.value === defaultOption
        ? dispatch({ type: INPUT.SHOW_INPUT_ERROR, errorName: label })
        : dispatch({ type: INPUT.HIDE_INPUT_ERROR, errorName: label })
    );
  };

  return (
    <>
      <Select
        value={value}
        setDefaultValue={defaultOption}
        onBlur={e => {
          checkValue(e.target);
        }}
        error={errors[label]}
        onChange={e => {
          dispatch({ type: INPUT.SAVE_VALUE, stateName: 'state', stateValue: e.target.value });
        }}
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

SelectContainer.propTypes = {
  defaultOption: PropTypes.string,
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
};

export default SelectContainer;
