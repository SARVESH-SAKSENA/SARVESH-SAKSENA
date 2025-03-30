import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = <h1 id="heading">Namaste React👍</h1>;

const heading = <h1>Hello from Sarvesh </h1>;

const App = () => (
  <div>
    {heading}
    <h2> Hello JSX </h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
