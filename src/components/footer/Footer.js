import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Giselle Taboada</h1>
        <p>Based in Buenos Aires</p>
      </div>
      <div className="footer-contact">
        <h3>Contact me</h3>
        <p>giseltaboada1990@gmail.com</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Design By Giselle Taboada</div>
        <div className="sns-links">
          <a href="http://www.linkedin.com/in/elizabeth-giselle-taboada-fullstackdeveloper" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://github.com/GiseTaboada1990" target="_blank" rel="noreferrer">
            <i className="fab fa-github github"></i>
          </a>
          <a href="https://wa.me/5491121920352" target="_blank" rel="noreferrer">
            <i className="fab fa-whatsapp whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
