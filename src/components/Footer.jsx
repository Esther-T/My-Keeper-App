import React from "react";
const currYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright ⓒ {currYear} Esther Tan</p>
    </footer>
  );
}

export default Footer;
