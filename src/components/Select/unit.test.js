import React from 'react';
import { shallow } from 'enzyme';
import Select from './index';

describe('<Select />', () => {
  it('renders correctly', () => {
    shallow(<Select />);
  });
});
