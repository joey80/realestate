import React from 'react';
import { shallow } from 'enzyme';
import Loader from './index';

describe('<Loader />', () => {
  it('renders correctly', () => {
    shallow(<Loader />);
  });
});
