import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Footer = ({ activeLink }) => {
  return (
    <footer className="footer">
      <div>
        <Link to="/" className={activeLink === "/" ? "active" : ""}>
          <i className="fas fa-home"></i>
        </Link>
      </div>
      <div>
        <Link
          to="/kelimeler"
          className={activeLink === "/kelimeler" ? "active" : ""}
        >
          <i className="fas fa-book"></i>
        </Link>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  activeLink: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  activeLink: state.words.activeLink,
});

export default connect(mapStateToProps, {})(Footer);
