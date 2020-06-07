import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Amplify from "aws-amplify";
import endpoints from "./conf/endpoints";

Amplify.configure({
  API: {
    endpoints,
  },
});

ReactDOM.render(<App />, document.getElementById("root"));
