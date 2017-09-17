import React, { Component } from "react";

// Initial state.
const makeInitialState = value => ({ value });

// State updater.
const setValueUpdater = value => state => Object.assign({}, state, { value });

// State utility function.
const makeActions = setState => ({
  setValue: value => setState(setValueUpdater(value))
});

export default class Input extends Component {
  constructor(props) {
    super(props);
    const { initialValue } = this.props;
    // Create model and bind it to the controller.
    this.state = makeInitialState(initialValue);
    this.actions = makeActions(this.setState.bind(this));
    this.onChange = this.onChange.bind(this);
  }

  onChange(domEvent) {
    const { value } = domEvent.target;
    this.actions.setValue(value);
  }

  render() {
    return <input onChange={this.onChange} value={this.state.value} />;
  }
}
