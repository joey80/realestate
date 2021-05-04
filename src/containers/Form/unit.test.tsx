import { mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Form from './index';
import { initialState as inputInitialState } from 'src/reducers/Input';
import { initialState as modalInitialState } from 'src/reducers/Modal';
import { initialState as resultsInitialState } from 'src/reducers/Results';

describe('Form', () => {
  let wrapper: ReactWrapper;
  const mockStore = configureMockStore([thunk]);

  const defaultStore = mockStore({
    Input: inputInitialState,
    Modal: modalInitialState,
    Results: resultsInitialState,
  });

  beforeEach(() => {
    wrapper = mount(
      <Provider store={defaultStore}>
        <Form />
      </Provider>
    );
  });

  it('renders correctly', () => {
    expect(wrapper.find(Form).exists()).toBeTruthy();
  });

  it('shows the right heading text', () => {
    const data = 'Where Would You Like To Search For A Property?';
    expect(wrapper.find('h1').text()).toBe(data);
  });
});
