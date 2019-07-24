import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch'
import Input from '../Input/Input';
import Modal from '../Modal/Modal';
import Select from '../Select/Select';
import { checkIfNull } from './Helper';
import { API } from '../../env/API';
import './Form.scss';

const convert = require('xml-js');

const mapStateToProps = state => ({
  searchLocation: state.Input.searchLocation,
  results: state.Results.searchResults
});

const mapDispatchToProps = dispatch => ({
  startLoading: () => dispatch({ type: 'START_LOADING' }),
  stopLoading: () => dispatch({ type: 'STOP_LOADING' }),
  saveResults: value => dispatch({ type: 'SAVE_RESULTS', newResults: value }),
  clearSearchValues: () => dispatch({ type: 'CLEAR_SEARCH_VALUES' })
});

export const Form = props => {

  const handleClick = e => {
    e.preventDefault();

    const callAPI = () => {
      const zswid = API.zillow.zwsid;
      const proxy = 'https://cors-anywhere.herokuapp.com/';
    
      fetch(`${proxy}http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=${zswid}&address=${props.searchLocation.streetAddress}&citystatezip=${props.searchLocation.city}+${props.searchLocation.state}+${props.searchLocation.zipCode}`)
      .then(res => res.text())
      .then(res => {
        const rawXML = convert.xml2json(res, { compact: true, spaces: 2 });
        return JSON.parse(rawXML);
      })
      .then(res => props.saveResults(res['SearchResults:searchresults'].response.results.result))
      .then(() => {
        props.stopLoading();
        props.clearSearchValues();
      });
    };

    if (checkIfNull(props.searchLocation) === true) {
      window.alert('All Fields Are Required');
    } else {
      props.startLoading();
      callAPI();
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
          <Select />
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
  searchLocation: PropTypes.object,
  startLoading: PropTypes.func,
  saveResults: PropTypes.func,
  stopLoading: PropTypes.func,
  clearSearchValues: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);