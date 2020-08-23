import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import store from './store'

import App from "./App";

const rootElement = document.getElementById("root");

function render() {
  ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
}

render()

store.subscribe(render)



