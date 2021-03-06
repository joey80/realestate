import React from 'react';
import { storiesOf } from '@storybook/react';
import InputContainer from 'src/containers/InputContainer';
import { ProviderWrapperWithForm } from '../util/Wrappers';
import configureStore from 'src/store';
import 'src/index.scss';
import 'src/containers/Form/styles.scss';

const inputContainerProps = {
  label: 'streetAddress',
  name: 'Street Address',
  type: 'text',
  errorMessage: 'Please enter a street address',
};

const withFormProvider = story => (
  <ProviderWrapperWithForm store={configureStore}>{story()}</ProviderWrapperWithForm>
);

storiesOf('InputContainer', module)
  .addDecorator(withFormProvider)
  .add('default', () => <InputContainer {...inputContainerProps} />);
