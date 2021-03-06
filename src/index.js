import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import App from "./App";

import "./scss/main.scss";

const inputRef = React.createRef();

ReactDOM.render(
  <React.StrictMode ref={inputRef}>
    <Router>
      <Switch>
        <App />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
