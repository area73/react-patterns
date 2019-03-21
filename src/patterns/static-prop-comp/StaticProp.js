import React from 'react';
import Hamburger from '../state-and-handler/StateHandler.js';
import PropTypes from 'prop-types';
import styles from '../../hamburger/Hamburger.module.scss';

class StaticProp extends React.Component {

  propTypes = {
    view: PropTypes.string,
    onClick: PropTypes.func,
  };

  state = {
    view: 'open',
  };

  // static Open = ({view, children}) => (view === 'open' ? children : console.log('nuuul', view), null);
  static Open = ({state, onClick, children}) => (`${state} / ${onClick} / ${children}`);
  static Close = ({view, children}) => (view === 'close' ? children : null);
  static Burger = ({view, onClick, ...props}) => (<Hamburger state={view} onClick={onClick} {...props}/>);
  // static disabled = ({state, children}) => (state === 'close' ? children : null);

  toggleState = () => {
    this.setState(curr => ({view: curr.view === styles.opened ? '' : styles.opened}));
  };


  toggle = () =>
    this.setState(
      ({on}) => ({on: !on}),
      () => this.props.onToggle(this.state.on),
    )


  render() {
    return React.Children.map(
      this.props.children,
      childElement => React.cloneElement(
        childElement, {
          state: this.state.view,
          onClick: this.onClick,
        }));
  }
}

export default StaticProp;
