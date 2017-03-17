//
// (c) 2016-XX, PJ$
// me@pjstein.co
// home.base
//
// core/input.js
//

'use strict';

const storage = require('./storage');
const React   = require('react');

// BaseInput -------------------------------------------------------------------
class BaseInput extends React.Component {

  constructor(props) {
    super(props);
    this.on_change = this.on_change.bind(this);
    this.state     = { value : storage.get(props.config.name) || '' };
  }

  on_change(event) {
    const { props } = this;
    const { value } = event.target;
    storage.set(props.config.name, value);
    this.setState({ value : storage.get(props.config.name) });
  }

}

// TextInput -------------------------------------------------------------------
class TextInput extends BaseInput {

  constructor(props) {
    super(props);
  }

  render() {
    const { index, config } = this.props;
    const { value }         = this.state;

    return (
      <input
        autoFocus   = { index === 1 }
        className   = { `i ${ config.classes } ${ config.validate(value) ? 'y' : 'n' }` }
        type        = "text"
        placeholder = { config.placeholder }
        value       = { value }
        onChange    = { this.on_change }
        tabIndex    = { index } />
    );
  }
}

// ChoicesInput ----------------------------------------------------------------
class ChoicesInput extends BaseInput {

  constructor(props) {
    super(props);
  }

  render() {
    const { index } = this.props;
    const { value } = this.state;

    return (<div />);
  }

}

// Dispatch --------------------------------------------------------------------
const Dispatch = {
  text    : TextInput,
  choices : ChoicesInput
}

// Input -----------------------------------------------------------------------
const Input = (props) => {
  const { index, config } = props;
  const Component = Dispatch[config.family];
  return (<Component index={ index } config={ config } />);
}

// Exports ---------------------------------------------------------------------
module.exports = Input;

