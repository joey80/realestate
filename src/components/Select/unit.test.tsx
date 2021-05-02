import React from 'react';
import { mount } from 'enzyme';
import Select from './index';

describe('Select', () => {
  it('renders correctly', () => {
    mount(<Select options={<option value='first option'>first option</option>} />);
  });
});
