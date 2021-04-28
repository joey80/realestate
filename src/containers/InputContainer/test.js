import React from 'react';
import { Provider } from 'react-redux';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import InputContainer from './InputContainer';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore([thunk]);
let wrapper;

describe('<InputContainer />', () => {
  
  beforeEach(() => {
    const store = mockStore({
      Input: {
        errors: {
          streetAddress: false,
          city: false,
          zipCode: false
        },
        searchLocation: {
            streetAddress: null,
            city: null,
            state: "Select A State",
            zipCode: null
        }
      }
    });

    const props = {
      label: "streetAddress",
      name: "Street Address",
      type: "text",
      errorMessage: "Please enter a street address"
    };

    wrapper = mount(
      <Provider store={ store }>
        <InputContainer { ...props } />
      </Provider>
    );

  });

  it('renders correctly', () => {
    expect(wrapper.find(InputContainer).length).to.equal(1);
  });

});