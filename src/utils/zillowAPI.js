import fetch from 'isomorphic-fetch';

export const zillowAPI = async ({ city, state, streetAddress, zipCode }) => {
  const id = process.env.REACT_APP_ZILLOW_ZWSID;
  const convert = require('xml-js');
  const results = await fetch(
    `/api/webservice/GetDeepSearchResults.htm?zws-id=${id}&address=${streetAddress}&citystatezip=${city}+${state}+${zipCode}`
  );
  const converted = await results.text();
  const cleanJSON = JSON.parse(convert.xml2json(converted, { compact: true, spaces: 2 }));
  const dirtyData = cleanJSON['SearchResults:searchresults'].response.results.result;
  const cleanData = {
    zpid: dirtyData.zpid,
    homeDetailsLink: dirtyData.links.homedetails._text,
    mapThisHomeLink: dirtyData.links.mapthishome._text,
    comparablesLink: dirtyData.links.comparables._text,
    address: {
      street: dirtyData.address.street._text,
      zip: dirtyData.address.zipcode._text,
      city: dirtyData.address.city._text,
      state: dirtyData.address.state._text,
      lat: dirtyData.address.latitude._text,
      long: dirtyData.address.longitude._text,
    },
    property: {
      type: dirtyData.useCode._text,
      sqft: dirtyData.finishedSqFt._text,
      bathrooms: dirtyData.bathrooms._text,
      bedrooms: dirtyData.bedrooms._text,
      value: dirtyData.zestimate._text,
    },
  };
  return cleanData;
};
