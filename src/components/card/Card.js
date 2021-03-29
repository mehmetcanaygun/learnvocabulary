import React from "react";
import PropTypes from "prop-types";

const Card = ({ word: { word, type, translation, sentence } }) => {
  // Flip Card
  const flip = (e) => {
    if (
      e.target.classList.contains("front") ||
      e.target.classList.contains("back")
    ) {
      e.target.parentElement.classList.toggle("flipped");
    } else if (e.target.tagName === "P") {
      e.target.parentElement.parentElement.classList.toggle("flipped");
    } else if (e.target.tagName === "B") {
      e.target.parentElement.parentElement.parentElement.classList.toggle(
        "flipped"
      );
    }
  };

  return (
    <li className="card" onClick={(e) => flip(e)}>
      <div className="front f-center">{word}</div>
      <div className="back">
        <p className="type">
          <b>Tür: </b>
          {type}
        </p>
        <p className="translation">
          <b>Çeviri: </b> {translation}
        </p>
        <p className="sentence">
          <b>Örnek: </b> {sentence}
        </p>
      </div>
    </li>
  );
};

Card.propTypes = {
  word: PropTypes.object.isRequired,
};

export default Card;
