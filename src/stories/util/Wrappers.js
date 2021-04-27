import React from 'react';
import { Provider } from 'react-redux';

export const ProviderWrapper = ({ children, store }) => (
  <Provider store={store}>{children}</Provider>
);

export const ProviderWrapperWithForm = ({ children, store }) => (
  <Provider store={store}>
    <div className='form'>
      <form className='form__container'>
        <div className='form__section'>{children}</div>
      </form>
    </div>
  </Provider>
);

export const WrapperWithForm = ({ children }) => (
  <div className='form'>
    <form className='form__container'>
      <div className='form__section'>{children}</div>
    </form>
  </div>
);
