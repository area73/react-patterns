import React from 'react';
import PropTypes from 'prop-types';
import Hamburger from '../../hamburger/Hamburger.js';

import styles from '../../hamburger/Hamburger.module.scss';

class StateHandler extends React.Component {

  state = {
    view: 'opened',
  };

  toggleState = () => {
    this.setState(curr => ({view: curr.view ===  styles.opened ? '' : styles.opened}));
  };

  render() {
    return (
      <Hamburger state={this.state.view} onClick={this.toggleState}/>
    );
  }
}

StateHandler.propTypes = {
  view: PropTypes.string,
  onClick: PropTypes.func,
};

export default StateHandler;
