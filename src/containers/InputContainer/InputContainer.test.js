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

// const initialState = {
//     errors: {
//         streetAddress: false,
//         city: false,
//         zipCode: false
//     },
//     searchLocation: {
//         streetAddress: null,
//         city: null,
//         state: "Select A State",
//         zipCode: null
//     }
// };

// let store;
// let wrapper;

describe('<InputContainer />', () => {
//   beforeEach(() => {
//     store = mockStore(initialState);
//     const props = {};
//     wrapper = mount(
//       <Provider store={ store }>
//         <InputContainer { ...props } />
//       </Provider>
//     );
//   });

  it('renders correctly', () => {
    const store = mockStore({
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
    });

    const props = {
        label: "streetAddress",
        name: "Street Address",
        type: "text",
        errorMessage: "Please enter a street address"
    };

    const wrapper = mount(<Provider store={ store }><InputContainer { ...props } /></Provider>);
    // expect(wrapper.find(InputContainer).length).to.equal(1);
    expect(wrapper.find(InputContainer).length).toEqual(1)
  });

});