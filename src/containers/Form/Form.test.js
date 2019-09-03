import React from 'react';
import { Provider } from 'react-redux';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Form from './Form';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore([thunk]);
let wrapper;

describe('<Form />', () => {
  
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
      },
      Modal: {
        modal: {
          isVisible: false,
          isLoading: false
        }
      },
      Results: {
        searchResults: {
          properties: null
        }
      }
    });

    wrapper = mount(
      <Provider store={ store }>
        <Form />
      </Provider>
    );

  });

  it('renders correctly', () => {
    expect(wrapper.find(Form).length).to.equal(1);
  });

});