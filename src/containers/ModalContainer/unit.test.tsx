import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ModalContainer from './index';

const mockStore = configureMockStore([thunk]);
let wrapper: ReactWrapper;

describe('ModalContainer', () => {
  beforeEach(() => {
    const store = mockStore({
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
        <ModalContainer />
      </Provider>
    );
  });

  it('renders correctly', () => {
    expect(wrapper.find(ModalContainer).length).to.equal(1);
  });
});
