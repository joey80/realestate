import React from 'react';
import { mount } from 'enzyme';
import InputError from './index';

describe('InputError', () => {
  it('renders correctly', () => {
    mount(<InputError error={false} errorMessage='this is the error message' />);
  });
});
