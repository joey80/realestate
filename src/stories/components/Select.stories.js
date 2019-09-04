import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from '../../components/Select/Select';
import { WrapperWithForm } from '../util/Wrappers';
import { states } from '../../utils/Helper';

const withForm = story => (<WrapperWithForm>{ story() }</WrapperWithForm>);

storiesOf('Select', module)
    .addDecorator(withForm)
    .add('default', () => (
        <Select
            options={ states.names.map(name => (<option key={ name } value={ name }>{ name }</option>)) }
        />
    )
);