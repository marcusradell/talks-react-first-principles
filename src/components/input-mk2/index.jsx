import React, { Component } from "react";

// Initial state is extracted out from the class.
const makeInitialState = value => ({ value });

// State updater function extracted from the class.
const setValueUpdater = value => state => Object.assign({}, state, { value });

// Each action will take some eventData and give to the setValueUpdater.
// setState will run our callback, giving it the state, getting a new state back.
const makeActions = setState => ({
  setValue: value => setState(setValueUpdater(value))
});

export default class Input extends Component {
  constructor(props) {
    super(props);
    const { initialValue } = this.props;
    // create initial state and actions.
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
