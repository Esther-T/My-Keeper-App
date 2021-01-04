import React from "react";
import ReactDom from "react-dom";

const name = "Esther";

ReactDom.render(
  <div>
    <h1>Hello {name} :)</h1>
    <h2>My favorite classic songs</h2>
    <ul>
      <li>Don't Stop Me Now</li>
      <li>My Life</li>
      <li>Piano Man</li>
    </ul>
  </div>,
  document.getElementById("root")
);
