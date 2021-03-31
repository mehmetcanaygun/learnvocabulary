import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Card from "./Card";
import { connect } from "react-redux";
import {
  saveKnown,
  saveUnknown,
  reset,
  excludeKnownWords,
} from "../../redux/actions";

const CardList = ({
  words,
  saveKnown,
  saveUnknown,
  knownWords,
  unknownWords,
  reset,
  excludeKnownWords,
}) => {
  const [index, setIndex] = useState(0);

  const addToKnown = () => {
    setIndex(index + 1);
    saveKnown(words[index]);
  };

  const addToUnknown = () => {
    setIndex(index + 1);
    saveUnknown(words[index]);
  };

  return (
    <div className="card-list">
      <ul
        style={{
          width: `${window.innerWidth * words.length}px`,
          left: `${-window.innerWidth * index}px`,
        }}
      >
        {words.map((word, index) => (
          <Card key={index} word={word} />
        ))}
      </ul>
      {index < words.length ? (
        <div className="buttons-container">
          {unknownWords.includes(words[index]) && (
            <div className="info">
              <i className="fas fa-info-circle"></i>
              <p>Bu kelimeyi daha önce "bilmiyorum" olarak işaretlemiştin.</p>
            </div>
          )}
          <p>Bu kelimeyi biliyor musun?</p>
          <div>
            <button onClick={() => addToKnown()}>
              <i className="fas fa-check"></i>
            </button>
            <button onClick={() => addToUnknown()}>
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      ) : (
        <div className="result-container">
          {unknownWords.length > 0 && (
            <button
              className="again-btn"
              onClick={() => {
                excludeKnownWords();
                setIndex(0);
              }}
            >
              Bilmediğin kelimeleri tekrarla
            </button>
          )}
          <Link to="/kelimeler" className="words-link">
            Bildiğin ya da bilemediğin kelimelerin listesine göz at
          </Link>
          <button
            className="reset-btn"
            onClick={() => {
              reset();
              setIndex(0);
            }}
          >
            İlerlemeni sıfırla ve baştan başla
          </button>
        </div>
      )}
    </div>
  );
};

CardList.propTypes = {
  words: PropTypes.array.isRequired,
  saveKnown: PropTypes.func.isRequired,
  saveUnknown: PropTypes.func.isRequired,
  knownWords: PropTypes.array.isRequired,
  unknownWords: PropTypes.array.isRequired,
  reset: PropTypes.func.isRequired,
  excludeKnownWords: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  knownWords: state.words.knownWords,
  unknownWords: state.words.unknownWords,
});

export default connect(mapStateToProps, {
  saveKnown,
  saveUnknown,
  reset,
  excludeKnownWords,
})(CardList);
