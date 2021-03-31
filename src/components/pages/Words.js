import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  excludeKnownWords,
  removeKnownWord,
  removeUnknownWord,
  saveKnown,
  saveUnknown,
  addToWords,
  removeFromWords,
} from "../../redux/actions";

const Words = ({
  knownWords,
  unknownWords,
  excludeKnownWords,
  removeKnownWord,
  removeUnknownWord,
  saveKnown,
  saveUnknown,
  addToWords,
  removeFromWords,
}) => {
  const [showKnown, setShowKnown] = useState(true);
  const [modalActive, setModalActive] = useState(false);
  const [currentWord, setCurrentWord] = useState({
    word: "",
    type: "",
    translation: "",
    sentence: "",
  });

  useEffect(() => {
    excludeKnownWords();

    // eslint-disable-next-line
  }, []);

  return (
    <div className="words-page">
      <div className={modalActive ? "word-modal active" : "word-modal"}>
        <button
          className="close-btn"
          onClick={() => {
            setModalActive(false);
          }}
        >
          <i className="fas fa-times"></i>
        </button>
        <h1 className="word">{currentWord.word}</h1>
        <p className="type">
          <b>Tür:</b> {currentWord.type}
        </p>
        <p className="translation">
          <b>Çeviri:</b> {currentWord.translation}
        </p>
        <p className="sentence">
          <b>Örnek:</b> {currentWord.sentence}
        </p>
        <div className="buttons-container">
          <a
            href={`https://translate.google.com/?sl=en&tl=tr&text=${currentWord.word.toLowerCase()}&op=translate`}
            target="_blank"
            rel="noreferrer"
          >
            Google Çeviri'yi Aç
          </a>
          {/* <button
            className="edit-btn remove"
            onClick={() => {
              if (currentWord.known) {
                removeKnownWord(currentWord);
              } else {
                removeUnknownWord(currentWord);
              }
              alert("Kelime bu listeden kaldırıldı.");
            }}
          >
            Bu Listeden Kaldır
          </button> */}
          <button
            className="edit-btn move"
            onClick={() => {
              if (currentWord.known) {
                removeKnownWord(currentWord);
                saveUnknown({
                  id: currentWord.id,
                  word: currentWord.word,
                  type: currentWord.type,
                  translation: currentWord.translation,
                  sentence: currentWord.sentence,
                });
                addToWords({
                  id: currentWord.id,
                  word: currentWord.word,
                  type: currentWord.type,
                  translation: currentWord.translation,
                  sentence: currentWord.sentence,
                });
              } else {
                removeUnknownWord(currentWord);
                saveKnown({
                  id: currentWord.id,
                  word: currentWord.word,
                  type: currentWord.type,
                  translation: currentWord.translation,
                  sentence: currentWord.sentence,
                });
                removeFromWords({
                  id: currentWord.id,
                  word: currentWord.word,
                  type: currentWord.type,
                  translation: currentWord.translation,
                  sentence: currentWord.sentence,
                });
              }
            }}
          >
            {currentWord.known
              ? "Bilmediğim Kelimelere Taşı"
              : "Bildiğim Kelimelere Taşı"}
          </button>
        </div>
      </div>
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
                  <button
                    onClick={() => {
                      setModalActive(true);
                      setCurrentWord({ ...w, known: true });
                    }}
                  >
                    <i className="fas fa-search"></i>
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
                  <button
                    onClick={() => {
                      setModalActive(true);
                      setCurrentWord({ ...w, known: false });
                    }}
                  >
                    <i className="fas fa-search"></i>
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
  excludeKnownWords: PropTypes.func.isRequired,
  removeKnownWord: PropTypes.func.isRequired,
  removeUnknownWord: PropTypes.func.isRequired,
  saveKnown: PropTypes.func.isRequired,
  saveUnknown: PropTypes.func.isRequired,
  addToWords: PropTypes.func.isRequired,
  removeFromWords: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  knownWords: state.words.knownWords,
  unknownWords: state.words.unknownWords,
});

export default connect(mapStateToProps, {
  excludeKnownWords,
  removeKnownWord,
  removeUnknownWord,
  saveKnown,
  saveUnknown,
  addToWords,
  removeFromWords,
})(Words);
