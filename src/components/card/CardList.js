import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import { connect } from "react-redux";
import { saveUnknown } from "../../redux/actions";

const CardList = ({ words, length, saveUnknown }) => {
  const [index, setIndex] = useState(0);

  const addToKnown = () => {
    setIndex(index + 1);
  };

  const addToUnknown = () => {
    setIndex(index + 1);
    saveUnknown(words[index]);
  };

  return (
    <div className="card-list">
      <ul
        style={{
          width: `${window.innerWidth * length}px`,
          left: `${-window.innerWidth * index}px`,
        }}
      >
        {words.map((word, index) => (
          <Card key={index} word={word} />
        ))}
      </ul>
      <div className="buttons-container">
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
    </div>
  );
};

CardList.propTypes = {
  words: PropTypes.array.isRequired,
  length: PropTypes.number.isRequired,
  saveUnknown: PropTypes.func.isRequired,
};

export default connect(null, { saveUnknown })(CardList);
