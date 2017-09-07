import React from "react";

export default ({ actions, props }) => {
  const onChange = domEvent => {
    const { value } = domEvent.target;

    actions.setValue(value);
  };

  return ({ state }) => <input onChange={onChange} value={state.value} />;
};
