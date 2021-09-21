import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState } from 'src/reducers/Input';
import SelectContainer from './index';
import { SelectContainerType } from './types';

describe('SelectContainer', () => {
  let wrapper: ReactWrapper;
  const mockStore = configureMockStore([thunk]);

  const defaultStore = mockStore({
    Input: initialState,
  });

  const defaultProps: SelectContainerType = {
    defaultValue: 'Select A State',
    errorMessage: 'Please choose a state',
    label: 'state',
    value: 'Select A State',
  };

  beforeEach(() => {
    wrapper = mount(
      <Provider store={defaultStore}>
        <SelectContainer {...defaultProps} />
      </Provider>
    );
  });

  it('renders correctly', () => {
    expect(wrapper.find(SelectContainer).exists()).toBeTruthy();
  });

  // shows default value
  // value changes onChange
  // shows error message if error
});
