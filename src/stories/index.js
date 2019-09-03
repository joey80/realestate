import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import Input from '../components/Input/Input';
import Loader from '../components/Loader/Loader';
import Select from '../components/Select/Select';
import { states } from '../utils/Helper';

storiesOf('Input', module)
  .add('default', () => <Input />);

storiesOf('Loader', module)
  .add('default', () => <Loader />);

storiesOf('Select', module)
  .add('default', () => (
    <Select
      options={ states.names.map(name => (<option key={ name } value={ name }>{ name }</option>)) }/>
  ));
