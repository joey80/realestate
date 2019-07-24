import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Input } from './Input';

configure({ adapter: new Adapter() });

describe('Input', () => {
    const testProps = {
        errors: {
            streetAddress: false
        },
        label: 'streetAddress',
        errorMessage: ''
    };
    const input = shallow(<Input { ...testProps } />);

    // it('should render correctly', () => {
    //     expect(input).toMatchSnapshot();
    // });

    it('Should show error message if field is empty', () => {
    });

    it('Should hide error message if field is not empty', () => {
    });

    it('Should only let valid zipcodes pass', () => {
    });

});