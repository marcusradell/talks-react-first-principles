import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);

    const { initialValue } = this.props;

    this.state = { value: initialValue };
    this.onChange = this.onChange.bind(this);
  }

  onChange(domEvent) {
    const { value } = domEvent.target;
    this.setState(state => Object.assign({}, state, { value }));
  }

  render() {
    return <input onChange={this.onChange} value={this.state.value} />;
  }
}
