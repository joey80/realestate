import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InputError from './InputError';

configure({ adapter: new Adapter() });

describe('<InputError />', () => {
  it('renders correctly', () => {
    shallow(<InputError />);
  });
});