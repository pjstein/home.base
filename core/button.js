//
// (c) 2016-XX, PJ$
// me@pjstein.co
// home.base
//
// core/button.js
//

'use strict';

const React = require('react');

// Button ----------------------------------------------------------------------
class Button extends React.Component {

  constructor(props) {
    super(props);
    this.on_submit   = this.on_submit.bind(this);
    this.on_click    = this.on_click.bind(this);
    this.on_keypress = this.on_keypress.bind(this);
  }

  on_submit() {
    const { storage } = this.props;
    if (storage.validate_all()) storage.submit();
  }

  on_click() {
    this.on_submit();
  }

  on_keypress(event) {
    if (event.key == 'Enter') this.on_submit();
  }

  render() {
    const { storage, index } = this.props;
    const locked             = !(storage.validate_all());

    return (
      <div
        className  = { `button ${(locked) ? 'locked' : ''}` }
        tabIndex   = { index    }
        onClick    = { this.on_click }
        onKeyPress = { this.on_keypress }
        children   = { this.props.children } />
    );
  }

}

// Exports ---------------------------------------------------------------------
module.exports = Button;
