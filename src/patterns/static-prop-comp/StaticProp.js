import React from 'react';
import Hamburger from '../../hamburger/Hamburger.js';
import PropTypes from 'prop-types';

class StaticProp extends React.Component {

  static propTypes = {
    view: PropTypes.string,
    onClick: PropTypes.func,
  };

  state = {
    view: 'close',
  };

  toggle = () => {
    this.setState(({view}) => (
      {view: (view === 'open') ? 'close' : 'open'}
    ));
  };

  static Open = ({view, children}) => (view === 'open' ? children : null);
  static Close = ({view, children}) => (view === 'close' ? children : null);
  static Burger = ({view, onClick, ...props}) => (<Hamburger view={view} onClick={onClick} {...props}/>);

  /**
   * For each child compoent that this component has, it will try to render.
   * Each of these sub element will recieve their own properties by cloning the element (React.cloneElement)
   * @returns {(React.DetailedReactHTMLElement<{view: string, onClick: StaticProp.toggle}, HTMLElement> | React.ReactHTMLElement<HTMLElement> | React.ReactSVGElement | React.DOMElement<{view: string, onClick: StaticProp.toggle}, Element> | React.FunctionComponentElement<P> | React.ComponentElement<P, React.Component<P, React.ComponentState>> | React.ReactElement<P>)[]}
   */
  render() {
    return React.Children.map(
      this.props.children,
      childElement => React.cloneElement(
        childElement, {
          view: this.state.view,
          onClick: this.toggle,
        }));
  }
}

export default StaticProp;
