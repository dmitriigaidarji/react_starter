import * as React from 'react';
import {render} from "react-dom";
import "core-js/stable";
import "regenerator-runtime/runtime";

const App = () => <div>Hello, React!</div>;

render(
  <App/>,
  document.getElementById("app")
);

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept();
}
