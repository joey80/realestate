import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import InputContainer from './index';
import { InputContainerType } from './types';
import { initialState } from 'src/reducers/Input';

describe('InputContainer', () => {
  let wrapper: ReactWrapper;
  const mockStore = configureMockStore([thunk]);

  const defaultStore = mockStore({
    Input: initialState,
  });

  const defaultProps: InputContainerType = {
    errorMessage: 'Please enter a street address',
    label: 'streetAddress',
    name: 'Street Address',
  };

  beforeEach(() => {
    wrapper = mount(
      <Provider store={defaultStore}>
        <InputContainer {...defaultProps} />
      </Provider>
    );
  });

  it('renders correctly', () => {
    expect(wrapper.find(InputContainer).exists()).toBeTruthy();
  });

  // TODO: use react-testing-library for this one

  // it('validates a zipcode', () => {
  //   wrapper.setProps({
  //     children: React.cloneElement((wrapper.props() as any).children, {
  //       errorMessage: 'Please enter a valid zipcode',
  //       label: 'zipCode',
  //       name: 'Zip Code',
  //     }),
  //   });

  //   act(() => {
  //     wrapper
  //       .find('input')
  //       .first()
  //       .simulate('change', { target: { value: '28031' } });
  //   });
  // });

  // shows an error message if error
  // saves value to store
});
