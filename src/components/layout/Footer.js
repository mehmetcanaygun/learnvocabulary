import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <Link to="/">
          <i className="fas fa-home"></i>
        </Link>
      </div>
      <div>
        <Link to="/kelimeler">
          <i className="fas fa-book"></i>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
