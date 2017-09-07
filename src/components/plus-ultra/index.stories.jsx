import React from "react";
import { storiesOf } from "@storybook/react";
import makeComponent from "./index";

storiesOf("Input", module).add("plus ultra", () => {
  const component = makeComponent({ initialValue: "Go beyond!" });
  const component2 = makeComponent({ initialValue: "comp 2" });
  const component3 = makeComponent({ initialValue: "comp 3" });

  // We can subscribe to any action from outside the component.
  component.actionStreams.setValue.forEach(data =>
    console.log("actionStreams.setValue:", data)
  );

  // We can combine states and subscribe to the combined stream. Really good for Forms.
  component.stateStream
    .combineLatest(
      component2.stateStream,
      component3.stateStream,
      (s1, s2, s3) => ({ s1, s2, s3 })
    )
    .forEach(data => console.log("stateStream:", data));

  return (
    <div>
      <div>
        <component.View />
      </div>
      <div style={{ marginTop: "15px" }}>
        <component2.View />
      </div>
      <div style={{ marginTop: "15px" }}>
        <component3.View />
      </div>
    </div>
  );
});
