import React, { Component } from "react";
// Abstractions in their own files.
import { makeActions } from "./utils";
import makeModel from "./model";
import makeView from "./view";

export default class Input extends Component {
  constructor(props) {
    super(props);

    // props are given to the model so it can be used in initialState or in updaters.
    const { initialState, updaters } = makeModel(this.props);

    this.state = initialState;
    // makeActions now takes an object with updaters and converts all of them to actions.
    this.actions = makeActions(this.setState.bind(this))(updaters);
    // makeView abstracts out the view.
    // Note that we send props and actions in vanilla JS, not via React.createElement.
    this.view = makeView({ actions: this.actions, props: this.props });
  }

  render() {
    return <this.view state={this.state} />;
  }
}
