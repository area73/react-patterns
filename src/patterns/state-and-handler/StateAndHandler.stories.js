import React from 'react';
import {storiesOf} from '@storybook/react';
// eslint-disable-next-line no-unused-vars
import globalStyles from '../../styles/main.scss';
import notes from './StateHandler.md';
import StageHandler from './StateHandler';

const stories = storiesOf('Patterns', module);

stories.add(
  'handler',
  () => (
    <div className="o-layout o-layout--flush u-margin-vertical-large u-margin-horizontal">
      <div className="o-layout__item u-padding-bottom-small">
        <span>State Handler</span>
        <StageHandler/>
      </div>
    </div>
  ),
  {notes},
);
