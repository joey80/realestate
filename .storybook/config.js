import React from 'react';
import { configure, addDecorator } from '@storybook/react';

addDecorator(storyFn => ( storyFn() ));

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
