import React from "react";
import { storiesOf } from "@storybook/react";
import makeComponent from "./index";

storiesOf("Input", module).add("mk5", () => {
  const input = makeComponent({ initialValue: "mk5 initial value" });

  return <input.view />;
});
