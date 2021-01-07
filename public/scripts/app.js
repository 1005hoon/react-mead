"use strict";

var userName = "Hoon Oh";
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    userName
  ),
  React.createElement(
    "p",
    null,
    "Age: 30"
  ),
  React.createElement(
    "p",
    null,
    "Location: Seoul"
  )
);

ReactDOM.render(template, document.querySelector("#root"));
