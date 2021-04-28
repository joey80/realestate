import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INPUT, MODAL, RESULTS } from 'src/actions/constants';
import { zillowAPI } from 'src/utils/zillowAPI';
import InputContainer from 'src/containers/InputContainer/InputContainer';
import ModalContainer from 'src/containers/ModalContainer/ModalContainer';
import SelectContainer from 'src/containers/SelectContainer/SelectContainer';
import { checkIfNull } from 'src/utils/Helper';
import { RootState } from 'src/reducers/index';
import './Form.scss';

const Form = () => {
  const dispatch = useDispatch();
  const searchLocation = useSelector((state: RootState) => state.Input.searchLocation);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (checkIfNull(searchLocation) === true) {
      window.alert('All Fields Are Required');
    } else {
      dispatch({ type: MODAL.START_LOADING });
      const zillow = await zillowAPI(searchLocation);

      if (zillow) {
        // TODO: clean up this dispatch
        dispatch({ type: RESULTS.SAVE_RESULTS, newResults: zillow });
        dispatch({ type: MODAL.STOP_LOADING });
        dispatch({ type: INPUT.CLEAR_SEARCH_VALUES });
      }
    }
  };

  return (
    <div className='form'>
      <ModalContainer />
      <form className='form__container' onSubmit={handleFormSubmit}>
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
          <button type='submit' className='form__button'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;