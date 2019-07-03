import React from 'react';
import { connect } from 'react-redux';
import Input from '../Input/Input';
import Modal from '../Modal/Modal';
import Select from '../Select/Select';
import { checkValidZip, checkIfNull } from './Helper';
import { API } from './Config';
import './Form.scss';

const mapStateToProps = state => {
  return {
      errors: state.Input.errors,
      modal: state.Modal.modal,
      searchLocation: state.Input.searchLocation,
      results: state.Results.searchResults
  };
};

const mapDispatchToProps = dispatch => {
  return {
      showError: name => dispatch({type: 'SHOW_INPUT_ERROR', errorName: name}),
      hideError: name => dispatch({type: 'HIDE_INPUT_ERROR', errorName: name}),
      showModal: () => dispatch({type: 'SHOW_MODAL'}),
      startLoading: () => dispatch({type: 'START_LOADING'}),
      stopLoading: () => dispatch({type: 'STOP_LOADING'}),
      saveValue: (name, value) => dispatch({type: 'SAVE_VALUE', stateName: name, stateValue: value}),
      saveResults: value => dispatch({type: 'SAVE_RESULTS', newResults: value}),
      clearSearchValues: () => dispatch({type: 'CLEAR_SEARCH_VALUES'})
  }
};

const checkValue = (props, event, name) => {
  const target = event.target;

  // Check for blank values
  if (target.value === '' ? props.showError(name) : props.hideError(name));

  // Validate zip code
  if (name === 'zipCode' && target.value !== '') {
    const valid = checkValidZip(target.value);
    if (valid === false ? props.showError(name) : props.hideError(name));
  }
};

const handleClick = (props, event) => {
  event.preventDefault();
  if (checkIfNull(props.searchLocation) === true) {
    alert('All Fields Are Required');
  } else {
    props.startLoading();
    callAPI(props);
  }
};

const callAPI = props => {
  const token = API.key;

  fetch(`https://api.estated.com/property/v3?token=${token}&address=${props.searchLocation.streetAddress}&city=${props.searchLocation.city}&state=${props.searchLocation.state}&zipcode=${props.searchLocation.zipCode}`)
  .then(response => response.json())
  .then(results => props.saveResults(results.properties))
  .then(results => {
    props.stopLoading();
    props.clearSearchValues();
  });
};

const Form = props => {

  const handleIt = () => {
    console.log(props);
  };

  return (
    <div className="form" onSubmit={event => {handleClick(props, event)}}>
      <Modal />
      <form className="form__container">
        <div className="form__section">
          <h1><strong>Hello!</strong><br />
          Where Would You Like To Search For A Property?</h1>
          <Input
            label="streetAddress"
            name="Street Address"
            type="text"
            onBlur={handleIt}
            onChange={event => {props.saveValue('streetAddress', event.target.value)}}
            errors={props.errors.streetAddress}
            errorMessage="Please enter a street address">
          </Input>
          <Input
            label="city"
            name="City"
            type="text"
            onBlur={event => {checkValue(props, event, 'city')}}
            onChange={event => {props.saveValue('city', event.target.value)}}
            errors={props.errors.city}
            errorMessage="Please enter a city name">
          </Input>
          <Select
            onBlur={event => {checkValue(props, event, 'state')}}
            onChange={event => {props.saveValue('state', event.target.value)}}>
          </Select>
          <Input
            label="zipCode"
            name="Zip Code"
            type="text"
            onBlur={event => {checkValue(props, event, 'zipCode')}}
            onChange={event => {props.saveValue('zipCode', event.target.value)}}
            errors={props.errors.zipCode}
            errorMessage="Please enter a valid 5 digit zip code">
          </Input>
        </div>
        <div className="form__section">
          <div>* All fields are required</div>
          <button type="submit" onClick={event => {handleClick(props, event)}} className="form__button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);//event => {checkValue(props, event, 'streetAddress')}