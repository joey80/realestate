import { mount, ReactWrapper } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import SelectContainer from './index';
import { SelectContainerType } from './types';
import { initialState } from 'src/reducers/Input';

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
    expect(wrapper.find(SelectContainer).length).to.equal(1);
  });

  // shows default value
  // value changes onChange
  // shows error message if error
});
