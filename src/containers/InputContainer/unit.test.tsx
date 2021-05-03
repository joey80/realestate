import { mount, ReactWrapper } from 'enzyme';
import { expect } from 'chai';
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
    expect(wrapper.find(InputContainer).length).to.equal(1);
  });

  // validates zipcode (5 chars plus other things)
  // checks for empty values
  // shows an error message if error
  // saves value to store
});
