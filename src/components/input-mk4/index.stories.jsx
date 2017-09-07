import React from "react";
import { storiesOf } from "@storybook/react";
import makeComponent from "./index";

storiesOf("Input", module).add("mk4", () => {
  const View = makeComponent({ initialValue: "mk4 initial value" });

  return <View />;
});
