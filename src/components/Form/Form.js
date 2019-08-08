import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { zillowAPI } from '../../utils/zillowAPI';
import Input from '../Input/Input';
import Modal from '../Modal/Modal';
import Select from '../Select/Select';
import { checkIfNull } from './Helper';
import './Form.scss';

const Form = () => {

  const dispatch = useDispatch();
  const searchLocation = useSelector(state => state.Input.searchLocation);

  const handleClick = async e => {
    e.preventDefault();

    if (checkIfNull(searchLocation) === true) {
      window.alert('All Fields Are Required');

    } else {
      dispatch({ type: 'START_LOADING' });
      const zillow = await zillowAPI(searchLocation);
      
      if (zillow) {
        dispatch({ type: 'SAVE_RESULTS', newResults: zillow });
        dispatch({ type: 'STOP_LOADING' });
        dispatch({ type: 'CLEAR_SEARCH_VALUES' });
      }
    }
  };

  return (
    <div className="form">
      <Modal />
      <form className="form__container">
        <div className="form__section">
          <h1><strong>Hello!</strong><br />
          Where Would You Like To Search For A Property?</h1>
          <Input
            label="streetAddress"
            name="Street Address"
            type="text"
            errorMessage="Please enter a street address"
          />
          <Input
            label="city"
            name="City"
            type="text"
            errorMessage="Please enter a city name"
          />
          <Select 
            value={ searchLocation.state }/>
          <Input
            label="zipCode"
            name="Zip Code"
            type="text"
            errorMessage="Please enter a valid 5 digit zip code"
          />
        </div>
        <div className="form__section">
          <div>* All fields are required</div>
          <button
            type="submit"
            onClick={ e => { handleClick(e) }}
            className="form__button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

Form.propTypes = {
  searchLocation: PropTypes.object
};

export default Form;