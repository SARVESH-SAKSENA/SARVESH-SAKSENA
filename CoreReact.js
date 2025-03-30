import React from "react";

import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", {}, "Namaste React")
  ),
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", {}, "I'm h1 tag")
  ),
]);

const root1 = ReactDOM.createRoot(document.getElementById("root"));

root1.render(parent);
