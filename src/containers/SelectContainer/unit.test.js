import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import SelectContainer from './index';

const mockStore = configureMockStore([thunk]);
let wrapper;

describe('<SelectContainer />', () => {
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

    const props = {
      defaultOption: 'Select A State',
      value: 'Select A State',
      label: 'state',
      errorMessage: 'Please choose a state',
    };

    wrapper = mount(
      <Provider store={store}>
        <SelectContainer {...props} />
      </Provider>
    );
  });

  it('renders correctly', () => {
    expect(wrapper.find(SelectContainer).length).to.equal(1);
  });
});
