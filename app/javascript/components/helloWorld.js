import React from "react";
import ReactDOM from "react-dom";

const HelloWord = ({ name = "Wanda" }) =>
  React.createElement("div", null, `Hello ${name}`);

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    React.createElement(Hello, { name: "Rails 7" }, null),
    document.getElementById("app")
  );
});
