import React from "react";
import ReactDom from "react-dom";

const fName = "Esther";
const lName = "T";
const currYear = "2021";

//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

ReactDom.render(
  <div>
    <p>Created by {fName + " " + lName}.</p>
    <p>Copyright {currYear}.</p>
  </div>,
  document.getElementById("root")
);
