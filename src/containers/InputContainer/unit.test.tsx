import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import InputContainer from './index';
import { InputContainerType } from './types';

const mockStore = configureMockStore([thunk]);
let wrapper: ReactWrapper;

describe('InputContainer', () => {
  beforeEach(() => {
    const store = mockStore({
      Input: {
        errors: {
          streetAddress: false,
          city: false,
          zipCode: false,
        },
        searchLocation: {
          streetAddress: null,
          city: null,
          state: 'Select A State',
          zipCode: null,
        },
      },
    });

    const props: InputContainerType = {
      errorMessage: 'Please enter a street address',
      label: 'streetAddress',
      name: 'Street Address',
    };

    wrapper = mount(
      <Provider store={store}>
        <InputContainer {...props} />
      </Provider>
    );
  });

  it('renders correctly', () => {
    expect(wrapper.find(InputContainer).length).to.equal(1);
  });
});
