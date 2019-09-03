import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import '../src/containers/Form/Form.scss';

addDecorator(storyFn => (
  <div className="form">
    <div className="form__container">
      <div className="form__section">
        { storyFn() }
      </div>
    </div>
  </div>
));

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
