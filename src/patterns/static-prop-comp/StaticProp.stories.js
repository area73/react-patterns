import React from 'react';
import {storiesOf} from '@storybook/react';
// eslint-disable-next-line no-unused-vars
import globalStyles from '../../styles/main.scss';
import notes from './StaticProp.md';
import StaticProp from './StaticProp.js';


const stories = storiesOf('Patterns', module);

stories.add(
  'Static Prop',
  () => (
    <div className="o-layout o-layout--flush u-margin-vertical-large u-margin-horizontal">
      <div className="o-layout__item u-padding-bottom-small">
        <span>Static Prop Component</span>
        <StaticProp view='open'>
          <StaticProp.Burger/>
          <StaticProp.Open> OPEN </StaticProp.Open>
          <StaticProp.Close> CLOSE </StaticProp.Close>
        </StaticProp>
      </div>
    </div>
  ),
  {notes},
);
