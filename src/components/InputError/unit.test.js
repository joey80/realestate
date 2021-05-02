import React from 'react';
import { shallow } from 'enzyme';
import InputError from './index';

describe('<InputError />', () => {
  it('renders correctly', () => {
    shallow(<InputError />);
  });
});
