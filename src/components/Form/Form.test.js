import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Form } from './Form';

configure({ adapter: new Adapter() });

describe('Main form', () => {
  it('should render correctly', () => {
    const component = shallow(<Form />);
  
    expect(component).toMatchSnapshot();
  });
});