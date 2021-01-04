import React from "react";
import ReactDom from "react-dom";

const fName = "Esther";
const lName = "T";

ReactDom.render(
  <div>
    <h1>Hello {`${fName} ${lName}`} :)</h1>
    <h2>My favorite classic songs</h2>
    <ul>
      <li>Don't Stop Me Now</li>
      <li>My Life</li>
      <li>Piano Man</li>
    </ul>
  </div>,
  document.getElementById("root")
);
