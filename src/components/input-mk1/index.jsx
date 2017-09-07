import React, { Component } from "react";

export default class Input extends Component {
  // Props enable variations at construction time. We will not support mutable props.
  constructor(props) {
    super(props);
    const { initialValue } = this.props;
    // Setup initial state.
    this.state = { value: initialValue };
    // `this` is used to mimic function closures.
    this.onChange = this.onChange.bind(this);
  }

  // Actions.
  onChange(domEvent) {
    const { value } = domEvent.target;
    const setValueUpdater = state => Object.assign({}, state, { value });
    this.setState(setValueUpdater);
  }

  // View.
  render() {
    return <input onChange={this.onChange} value={this.state.value} />;
  }
}
