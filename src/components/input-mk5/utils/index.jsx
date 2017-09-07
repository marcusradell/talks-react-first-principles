import React, { Component } from "react";
import { makeActions } from "./utils";

export default props => makeModel => makeView => {
  let actions;

  const view = class ConnectedComponent extends Component {
    constructor() {
      super();
      const { initialState, updaters } = makeModel(props);
      this.state = initialState;
      actions = makeActions(this.setState.bind(this))(updaters);
      this.view = makeView({ actions, props });
    }

    render() {
      return <this.view state={this.state} />;
    }
  };

  return {
    view,
    actions
  };
};
