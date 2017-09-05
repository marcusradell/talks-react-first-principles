import React from "react";
import { storiesOf } from "@storybook/react";
import View from "./index";

storiesOf("Input", module).add("mk2", () => (
  <View initialValue="Second generation" />
));
