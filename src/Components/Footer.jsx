import React from "react";

function Footer() {
  const Year = new Date().getFullYear();

  return <footer>Copywrite @ {Year}</footer>;
}

export default Footer;
