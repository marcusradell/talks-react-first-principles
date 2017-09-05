import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import Input from "./components/input";

const App = () => (
  <div>
    <Input />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
