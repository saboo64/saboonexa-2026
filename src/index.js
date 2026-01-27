import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StateProvide } from "./components/Context/StateProvide";

ReactDOM.render(
  <StateProvide>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StateProvide>,

  document.getElementById("root")
);
