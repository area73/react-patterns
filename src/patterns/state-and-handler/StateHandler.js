import React from 'react';
import PropTypes from 'prop-types';
import Hamburger from '../../hamburger/Hamburger.js';

class StateHandler extends React.Component {

  static propTypes = {
    view: PropTypes.string,
    onClick: PropTypes.func,
  };

  state = {
    view: 'open',
  };

  toggleState = () => {
    this.setState(curr => (
      {view: curr.view === 'open' ? 'close' : 'open'}
    ));
  };

  render() {
    return (
      <Hamburger view={this.state.view} onClick={this.toggleState}/>
    );
  }
}

export default StateHandler;
