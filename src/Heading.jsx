import React from "react";

const customStyle = {
  color: "blue",
  fontSize: "30px"
};

const num = Math.random() % 10;
console.log(num);
if (num % 2 !== 0) {
  customStyle.color = "red";
}

function Heading(){
  return <h1 style={customStyle}>My Favourite Foods</h1>
}

export default Heading;