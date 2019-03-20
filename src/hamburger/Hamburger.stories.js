import React from 'react';
import {storiesOf} from '@storybook/react';
// eslint-disable-next-line no-unused-vars
import globalStyles from '../styles/main.scss';
import styles from './Hamburger.module.scss';
import notes from './Hamburger.md';
import Hamburger from './Hamburger.js';

const customStyles = `
    .o-layout__item {
      border: 8px solid white;
      background-color:rgba(255,255,255,0.5);
      text-align:center !important;
    }
    .o-layout__item span {
      background-color: black;
      color: white;
      width: 100%;
      display: inline-block;
      padding: 5px;
      margin-bottom: 10px;
    }
`;

const stories = storiesOf('Hamburger', module).addDecorator(storyFn => (
  <>
    <style>{customStyles}</style>
    {storyFn()}
  </>));
stories.add(
  'states',
  () => (
    <div className="o-layout o-layout--flush u-margin-vertical-large u-margin-horizontal">
      <div className="o-layout__item u-1/3 u-padding-bottom-small">
        <span>No state</span>
        <Hamburger/>
      </div>
      <div className="o-layout__item u-1/3 u-padding-bottom-small">
        <span>Opened</span>
        <Hamburger state={styles.opened}/>
      </div>
      <div className="o-layout__item u-1/3 u-padding-bottom-small">
        <span>Disabled</span>
        <Hamburger state={styles.disabled}/>
      </div>
    </div>
  ),
  {notes},
);
