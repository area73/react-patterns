import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hamburger.module.scss';

// https://codeburst.io/alternative-to-javascripts-switch-statement-with-a-functional-twist-3f572787ba1c
const matched = x => ({
  on: () => matched(x),
  otherwise: () => x,
});
const match = x => ({
  on: (pred, fn) => (pred(x) ? matched(fn(x)) : match(x)),
  otherwise: fn => fn(x),
});

const matchState = state => match(state).on(state => state === 'open', () => styles.opened).otherwise(() => null);

const Hamburger = props => {
  const {state, onClick} = props;

  return (
    <button
      className={`  ${styles['menu-toggle']}
                    ${styles.hamburger}
                    ${matchState(state)}`}
      id="menu-toggle"
      aria-expanded="false"
      onClick={onClick}
    >
      <span className={styles['screen-reader-text']}>Menu</span>
      <svg
        className={`${styles.icon} ${styles['icon-menu-toggle']}`}
        aria-hidden="true"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
      >
        <g className={styles['svg-menu-toggle']}>
          <path className={`${styles.line} ${styles['line-1']}`} d="M5 13h90v14H5z"/>
          <path className={`${styles.line} ${styles['line-2']}`} d="M5 43h90v14H5z"/>
          <path className={`${styles.line} ${styles['line-3']}`} d="M5 73h90v14H5z"/>
        </g>
      </svg>
    </button>
  );
};

Hamburger.defaultProps = {
  onClick: () => {},
};

Hamburger.propTypes = {
  /**
   View state of the component.
   each view state is related with a style.
   Available states:
   opened
   disabled
   closed (default)
   **/
  state: PropTypes.string,
  onClick: PropTypes.func,
};

export default Hamburger;
