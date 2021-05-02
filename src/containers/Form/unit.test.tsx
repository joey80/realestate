import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Form from './index';

const mockStore = configureMockStore([thunk]);
let wrapper: ReactWrapper;

describe('Form', () => {
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
      Modal: {
        modal: {
          isVisible: false,
          isLoading: false,
        },
      },
      Results: {
        searchResults: {
          properties: null,
        },
      },
    });

    wrapper = mount(
      <Provider store={store}>
        <Form />
      </Provider>
    );
  });

  it('renders correctly', () => {
    expect(wrapper.find(Form).length).to.equal(1);
  });

  it('shows the right heading text', () => {
    const data = 'Hello!Where Would You Like To Search For A Property?';
    expect(wrapper.find('h1').text().trim()).to.equal(data);
  });
});
