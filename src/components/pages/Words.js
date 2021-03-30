import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Words = ({ knownWords, unknownWords }) => {
  const [showKnown, setShowKnown] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  return (
    <div className="words-page">
      <div className="words-container">
        <div className="titles">
          <button
            className={showKnown ? "active" : ""}
            onClick={() => setShowKnown(true)}
          >
            Bildiğim
          </button>
          <button
            className={!showKnown ? "active" : ""}
            onClick={() => setShowKnown(false)}
          >
            Bilmediğim
          </button>
        </div>
        <div className="words">
          <div className={showKnown ? "known active" : "known"}>
            <ul>
              {knownWords.map((w, index) => (
                <li key={index}>
                  {w.word}{" "}
                  <button>
                    <i className="fas fa-pen"></i>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={!showKnown ? "unknown active" : "unknown"}>
            <ul>
              {unknownWords.map((w, index) => (
                <li key={index}>
                  {w.word}{" "}
                  <button>
                    <i className="fas fa-pen"></i>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

Words.propTypes = {
  knownWords: PropTypes.array.isRequired,
  unknownWords: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  knownWords: state.words.knownWords,
  unknownWords: state.words.unknownWords,
});

export default connect(mapStateToProps, {})(Words);
