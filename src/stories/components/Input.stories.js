import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../../components/Input/Input';

const inputProps = {
    error: true
};

storiesOf('Input', module)
  .add('default', () => <Input />)
  .add('error', () => <Input { ...inputProps } />
);