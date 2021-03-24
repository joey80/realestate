import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INPUT, MODAL, RESULTS } from '../../actions/constants';
import { zillowAPI } from '../../utils/zillowAPI';
import InputContainer from '../InputContainer/InputContainer';
import ModalContainer from '../ModalContainer/ModalContainer';
import SelectContainer from '../SelectContainer/SelectContainer';
import { checkIfNull } from '../../utils/Helper';
import './Form.scss';

const Form = () => {
  const dispatch = useDispatch();
  const searchLocation = useSelector(state => state.Input.searchLocation);

  const handleClick = async e => {
    e.preventDefault();

    if (checkIfNull(searchLocation) === true) {
      window.alert('All Fields Are Required');
    } else {
      dispatch({ type: MODAL.START_LOADING });
      const zillow = await zillowAPI(searchLocation);

      if (zillow) {
        dispatch({ type: RESULTS.SAVE_RESULTS, newResults: zillow });
        dispatch({ type: MODAL.STOP_LOADING });
        dispatch({ type: INPUT.CLEAR_SEARCH_VALUES });
      }
    }
  };

  return (
    <div className='form'>
      <ModalContainer />
      <form className='form__container'>
        <div className='form__section'>
          <h1>
            <strong>Hello!</strong>
            <br />
            Where Would You Like To Search For A Property?
          </h1>
          <InputContainer
            label='streetAddress'
            name='Street Address'
            type='text'
            errorMessage='Please enter a street address'
          />
          <InputContainer
            label='city'
            name='City'
            type='text'
            errorMessage='Please enter a city name'
          />
          <SelectContainer
            defaultOption='Select A State'
            value={searchLocation.state}
            label='state'
            errorMessage='Please select a state'
          />
          <InputContainer
            label='zipCode'
            name='Zip Code'
            type='text'
            errorMessage='Please enter a valid 5 digit zip code'
          />
        </div>
        <div className='form__section'>
          <div>* All fields are required</div>
          <button
            type='submit'
            onClick={e => {
              handleClick(e);
            }}
            className='form__button'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
