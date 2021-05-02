import React from 'react';
import { mount } from 'enzyme';
import Loader from './index';

describe('Loader', () => {
  it('renders correctly', () => {
    mount(<Loader />);
  });
});
