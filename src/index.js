import React from "react";
import ReactDom from "react-dom";

const fName = "Esther";
const lName = "T";
const currYear = new Date().getFullYear();

ReactDom.render(
  <div>
    <p>Created by {fName + " " + lName}.</p>
    <p>Copyright {currYear}.</p>
  </div>,
  document.getElementById("root")
);
