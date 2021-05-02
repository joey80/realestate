import React from 'react';
import { shallow } from 'enzyme';
import Modal from './index';

describe('<Modal />', () => {
  it('renders correctly', () => {
    shallow(<Modal />);
  });
});
