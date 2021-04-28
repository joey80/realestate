import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from './Input';

configure({ adapter: new Adapter() });

describe('<Input />', () => {
  it('renders correctly', () => {
    shallow(<Input />);
  });
});