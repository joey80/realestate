import React from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { INPUT, MODAL, RESULTS } from 'src/actions/constants';
import InputContainer from 'src/containers/InputContainer';
import ModalContainer from 'src/containers/ModalContainer';
import SelectContainer from 'src/containers/SelectContainer';
import { hasValidData } from 'src/utils/Helper';
import { RootState } from 'src/reducers';
import './styles.scss';

const Form = () => {
  const dispatch = useDispatch();
  const searchLocation = useSelector((state: RootState) => state.Input.searchLocation);

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (hasValidData(searchLocation)) {
      dispatch({ type: MODAL.START_LOADING });
      handleZillow();
    } else {
      window.alert('All Fields Are Required');
    }
  };

  const handleZillow = async () => {
    const zillowResults = await axios('/.netlify/functions/zillow', {
      method: 'POST',
      data: searchLocation,
    });

    if (zillowResults) {
      batch(() => {
        dispatch({ type: RESULTS.SAVE_RESULTS, newResults: zillowResults.data.body });
        dispatch({ type: MODAL.STOP_LOADING });
        dispatch({ type: INPUT.CLEAR_SEARCH_VALUES });
      });
    }
  };

  return (
    <div className='form'>
      <ModalContainer />
      <form className='form__container' onSubmit={handleFormSubmit}>
        <div className='form__section'>
          <h1>Where Would You Like To Search For A Property?</h1>
          <InputContainer
            errorMessage='Please enter a street address'
            label='streetAddress'
            name='Street Address'
          />
          <InputContainer label='city' name='City' errorMessage='Please enter a city name' />
          <SelectContainer
            defaultValue='Select A State'
            errorMessage='Please select a state'
            label='state'
            value={searchLocation.state}
          />
          <InputContainer
            errorMessage='Please enter a valid 5 digit zip code'
            label='zipCode'
            maxLength={5}
            name='Zip Code'
          />
        </div>
        <div className='form__section'>
          <div>* All fields are required</div>
          <button type='submit' className='form__button'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
