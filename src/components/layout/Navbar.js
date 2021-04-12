import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { reset } from "../../redux/actions";

const Navbar = ({ reset }) => {
  const resetProgress = () => {
    if (window.confirm("İlerlemeni sıfırlamak istediğine emin misin?")) {
      reset();
    }
  };

  return (
    <header className="navbar f-center">
      <div className="logo f-center">LV</div>
      <button className="reset-btn" onClick={() => resetProgress()}>
        <i className="fas fa-undo-alt"></i> Sıfırla
      </button>
    </header>
  );
};

Navbar.propTypes = {
  reset: PropTypes.func.isRequired,
};

export default connect(null, { reset })(Navbar);
