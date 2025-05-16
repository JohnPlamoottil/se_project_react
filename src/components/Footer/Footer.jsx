import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <span>Developed by JJ Plamoottil</span>
      <span>{new Date().getFullYear()}</span>
      {/* <div className="footer__content">
        <p className="footer__text">Developed by JJ Plamoottil</p>
        <p className="footer__text">2025</p>
      </div> */}
    </footer>
  );
}

export default Footer;
