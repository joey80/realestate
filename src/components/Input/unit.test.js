import React from 'react';
import { shallow } from 'enzyme';
import Input from './index';

describe('<Input />', () => {
  it('renders correctly', () => {
    shallow(<Input />);
  });
});
