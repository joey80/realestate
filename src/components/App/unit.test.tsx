import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from 'src/store/index';
import App from './index';

it('renders without crashing', () => {
  mount(
    <Provider {...{ store }}>
      <App />
    </Provider>
  );
});
