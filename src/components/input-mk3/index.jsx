import React, { Component } from "react";
import makeModel from "./model";
import { makeActions } from "./utils";

export default class Input extends Component {
  constructor(props) {
    super(props);

    const { initialState, updaters } = makeModel(this.props);

    this.state = initialState;

    this.actions = makeActions(this.setState.bind(this))(updaters);

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
