import React from "react";

export default ({ actions, props }) => {
  const onChange = domEvent => {
    const { value } = domEvent.target;

    actions.setValue(value);
  };

  return ({ value }) => <input onChange={onChange} value={value} />;
};
