import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch'
import Input from '../Input/Input';
import Modal from '../Modal/Modal';
import Select from '../Select/Select';
import { checkIfNull } from './Helper';
import { API } from '../../env/API';
import './Form.scss';

const Form = () => {

  const dispatch = useDispatch();
  const searchLocation = useSelector(state => state.Input.searchLocation);
  const convert = require('xml-js');

  const callAPI = () => {
    const zswid = API.zillow.zwsid;
    const proxy = 'https://cors-anywhere.herokuapp.com/';
  
    fetch(`${proxy}http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=${zswid}&address=${searchLocation.streetAddress}&citystatezip=${searchLocation.city}+${searchLocation.state}+${searchLocation.zipCode}`)
    .then(res => res.text())
    .then(res => {
      const rawXML = convert.xml2json(res, { compact: true, spaces: 2 });
      return JSON.parse(rawXML);
    })
    .then(res => {
      const returned = res['SearchResults:searchresults'].response.results.result;
      
      const cleanData = {
        zpid: returned.zpid,
        homeDetailsLink: returned.links.homedetails._text,
        mapThisHomeLink: returned.links.mapthishome._text,
        comparablesLink: returned.links.comparables._text,
        address: {
          street: returned.address.street._text,
          zip: returned.address.zipcode._text,
          city: returned.address.city._text,
          state: returned.address.state._text,
          lat: returned.address.latitude._text,
          long: returned.address.longitude._text
        },
        property: {
          type: returned.useCode._text,
          sqft: returned.finishedSqFt._text,
          bathrooms: returned.bathrooms._text,
          bedrooms: returned.bedrooms._text,
          value: returned.zestimate._text
        }
      }
      console.log(cleanData);
      console.log(res);
      dispatch({ type: 'SAVE_RESULTS', newResults: returned })
    })
    .then(() => {
      dispatch({ type: 'STOP_LOADING' });
      dispatch({ type: 'CLEAR_SEARCH_VALUES' });
    });
  };

  const handleClick = e => {
    e.preventDefault();

    if (checkIfNull(searchLocation) === true) {
      window.alert('All Fields Are Required');

    } else {
      dispatch({ type: 'START_LOADING' });
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
            Submit Test
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