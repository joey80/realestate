import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Modal from './Modal';

configure({ adapter: new Adapter() });

describe('<Modal />', () => {
  it('renders correctly', () => {
    shallow(<Modal />);
  });
});