import React, { Component } from "react";
import { makeActions } from "./utils";
import makeModel from "./model";
import makeView from "./view";

export default class Input extends Component {
  constructor(props) {
    super(props);

    const { initialState, updaters } = makeModel(this.props);

    this.state = initialState;
    this.actions = makeActions(this.setState.bind(this))(updaters);
    this.view = makeView({ actions: this.actions, props: this.props });
  }

  render() {
    return <this.view state={this.state} />;
  }
}
