import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import SelectContainer from './index';
import { SelectContainerType } from './types';

const mockStore = configureMockStore([thunk]);
let wrapper: ReactWrapper;

describe('SelectContainer', () => {
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

    const props: SelectContainerType = {
      defaultValue: 'Select A State',
      errorMessage: 'Please choose a state',
      label: 'state',
      value: 'Select A State',
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
