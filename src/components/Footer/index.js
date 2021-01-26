import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <span>The current date is: {new Date().getMonth()+1}-{new Date().getDate()}, { new Date().getFullYear() }</span>
    </footer>
  );
}

export default Footer;