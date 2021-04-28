import React from 'react';
import { Provider } from 'react-redux';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ModalContainer from './ModalContainer';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore([thunk]);
let wrapper;

describe('<ModalContainer />', () => {
  
  beforeEach(() => {
    const store = mockStore({
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
        <ModalContainer />
      </Provider>
    );

  });

  it('renders correctly', () => {
    expect(wrapper.find(ModalContainer).length).to.equal(1);
  });

});