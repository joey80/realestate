import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'src/store/index';
import App from 'src/components/App';
import * as serviceWorker from 'src/serviceWorker';
import 'src/index.scss';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
