import React from 'react';
import { storiesOf } from '@storybook/react';
import InputContainer from '../../containers/InputContainer/InputContainer';
import { ProviderWrapperWithForm } from '../util/Wrappers';
import configureStore from '../../store';
import '../../index.scss';
import '../../containers/Form/Form.scss';

const inputContainerProps = {
  label: "streetAddress",
  name: "Street Address",
  type: "text",
  errorMessage: "Please enter a street address"
};

const withFormProvider = story => (<ProviderWrapperWithForm store={ configureStore }>{ story() }</ProviderWrapperWithForm>);

storiesOf('InputContainer', module)
  .addDecorator(withFormProvider)
  .add('default', () => <InputContainer { ...inputContainerProps } />
);