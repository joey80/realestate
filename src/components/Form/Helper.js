export const checkValidZip = zip => {
    if(!/^[0-9]{5}(-[0-9]{4})?$/.test(zip)) {
      return false;
    } else {
      return true;
    }
};

export const states = {
    names: ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY']
};

export const checkIfNull = obj => {
  for (let value in obj) {
    if (obj[value] === null) {
      return true;
    } else {
      return false;
    }
  }
};