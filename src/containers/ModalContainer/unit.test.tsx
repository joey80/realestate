import { mount, ReactWrapper } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ModalContainer from './index';
import { initialState as modalInitialState } from 'src/reducers/Modal';
import { initialState as resultsInitialState } from 'src/reducers/Results';

describe('ModalContainer', () => {
  let wrapper: ReactWrapper;
  const mockStore = configureMockStore([thunk]);

  const defaultStore = mockStore({
    Modal: modalInitialState,
    Results: resultsInitialState,
  });

  beforeEach(() => {
    wrapper = mount(
      <Provider store={defaultStore}>
        <ModalContainer />
      </Provider>
    );
  });

  it('renders correctly', () => {
    expect(wrapper.find(ModalContainer).length).to.equal(1);
  });

  // modal is null by default
  // shows loader if loading state
  // hides modal on click
  // shows results content when loaded
});
