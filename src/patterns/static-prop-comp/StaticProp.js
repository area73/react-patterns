import React from 'react';
import Hamburger from '../state-and-handler/StateHandler.js';
import PropTypes from 'prop-types';
import styles from '../../hamburger/Hamburger.module.scss';

class StaticProp extends React.Component {

  propTypes = {
    view: PropTypes.string,
    onClick: PropTypes.func,
  };

  open = ({state, children}) => (state ? children : null);

  state = {
    view: 'opened',
  };

  toggleState = () => {
    this.setState(curr => ({view: curr.view === styles.opened ? '' : styles.opened}));
  };

  render() {
    return (
      <Hamburger state={this.state.view} onClick={this.toggleState}/>
    );
  }
}

export default StaticProp;
