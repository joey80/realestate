import React from 'react';
import { connect } from 'react-redux';
import Input from '../Input/Input';
import Modal from '../Modal/Modal';
import Select from '../Select/Select';
import { checkIfNull } from './Helper';
import { API } from './Config';
import './Form.scss';

const mapStateToProps = state => {
  return {
    searchLocation: state.Input.searchLocation,
    results: state.Results.searchResults
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startLoading: () => dispatch({type: 'START_LOADING'}),
    stopLoading: () => dispatch({type: 'STOP_LOADING'}),
    saveResults: value => dispatch({type: 'SAVE_RESULTS', newResults: value}),
    clearSearchValues: () => dispatch({type: 'CLEAR_SEARCH_VALUES'})
  }
};

const Form = props => {

  const handleClick = event => {
    event.preventDefault();

    if (checkIfNull(props.searchLocation) === true) {
      alert('All Fields Are Required');
    } else {
      props.startLoading();
      callAPI();
    }
  };

  const callAPI = () => {
    const token = API.key;
  
    fetch(`https://api.estated.com/property/v3?token=${token}&address=${props.searchLocation.streetAddress}&city=${props.searchLocation.city}&state=${props.searchLocation.state}&zipcode=${props.searchLocation.zipCode}`)
    .then(response => response.json())
    .then(results => props.saveResults(results.properties))
    .then(results => {
      props.stopLoading();
      props.clearSearchValues();
    });
  };

  return (
    <div className="form" onSubmit={event => {handleClick(event)}}>
      <Modal />
      <form className="form__container">
        <div className="form__section">
          <h1><strong>Hello!</strong><br />
          Where Would You Like To Search For A Property?</h1>

          <Input
            label="streetAddress"
            name="Street Address"
            type="text"
            errorMessage="Please enter a street address">
          </Input>

          <Input
            label="city"
            name="City"
            type="text"
            errorMessage="Please enter a city name">
          </Input>

          <Select />

          <Input
            label="zipCode"
            name="Zip Code"
            type="text"
            errorMessage="Please enter a valid 5 digit zip code">
          </Input>

        </div>
        <div className="form__section">
          <div>* All fields are required</div>
          <button type="submit" onClick={event => {handleClick(event)}} className="form__button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);