import React from 'react';
import { mount } from 'enzyme';
import Modal from './index';

describe('Modal', () => {
  it('renders correctly', () => {
    mount(<Modal />);
  });
});
