import React, { Component } from "react";

const makeInitialState = value => ({ value });

const setValueUpdater = value => state => Object.assign({}, state, { value });

const makeActions = setState => {
  return {
    setValue: value => setState(setValueUpdater(value))
  };
};

export default class Input extends Component {
  constructor(props) {
    super(props);

    const { initialValue } = this.props;

    this.state = makeInitialState(initialValue);

    this.actions = makeActions(this.setState);

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
