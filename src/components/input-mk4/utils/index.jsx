import React, { Component } from "react";
import { makeActions } from "./utils";

export default props => makeModel => makeView =>
  class ConnectedComponent extends Component {
    constructor() {
      super();
      const { initialState, updaters } = makeModel(props);
      this.state = initialState;
      const actions = makeActions(this.setState.bind(this))(updaters);
      this.view = makeView({ actions, props });
    }

    render() {
      return <this.view state={this.state} />;
    }
  };
