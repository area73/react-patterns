import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hamburger.module.scss';

const Hamburger = props => {
  return (
    <button
      className={` ${styles['menu-toggle']} ${styles.hamburger} ${props.state}`}
      id="menu-toggle"
      aria-expanded="false"
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
          <path className={`${styles.line} ${styles['line-1']}`} d="M5 13h90v14H5z" />
          <path className={`${styles.line} ${styles['line-2']}`}  d="M5 43h90v14H5z" />
          <path className={`${styles.line} ${styles['line-3']}`}  d="M5 73h90v14H5z" />
        </g>
      </svg>
    </button>
  );
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
};

export default Hamburger;
