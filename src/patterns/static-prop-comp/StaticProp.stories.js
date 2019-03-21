import React from 'react';
import {storiesOf} from '@storybook/react';
// eslint-disable-next-line no-unused-vars
import globalStyles from '../../styles/main.scss';
import notes from './StaticProp.md';
import StaticProp from './StaticProp.js';
import styles from './StaticProp.module.scss';


const stories = storiesOf('Patterns', module);

stories.add(
  'Static Prop',
  () => (
    <div className="o-layout o-layout--flush u-margin-vertical-large u-margin-horizontal">
      <div className="o-layout__item u-padding-bottom-small">
        <span>Static Prop Component</span>
        <StaticProp>
          <StaticProp.Burger/>
          <StaticProp.Open>
            <ul className={`${styles.StaticPropList} o-list-bare u-margin-top-tiny`} >
              <li className="o-list-bare__item"><a href="#">Option one</a></li>
              <li className="o-list-bare__item"><a href="#">Option two</a></li>
              <li><a href="#">Option three</a></li>
              <li><a href="#">Option four</a></li>
            </ul>
          </StaticProp.Open>
          <StaticProp.Close> <div className="u-margin-top-tiny">Please click on the menu</div> </StaticProp.Close>
        </StaticProp>
      </div>
    </div>
  ),
  {notes},
);
