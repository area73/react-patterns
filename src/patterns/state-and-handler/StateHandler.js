import React from 'react';
import PropTypes from 'prop-types';
import Hamburger from '../../hamburger/Hamburger.js';

class StateHandler extends React.Component {

  state = {
    view: 'open',
  };

  toggleState = () => {
    this.setState(curr => ({view: curr.view ===  'open' ? 'close' : 'open'}));
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
