import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getWords, start } from "../../redux/actions";
import CardList from "../card/CardList";

const Home = ({ getWords, words, start, started }) => {
  useEffect(() => {
    getWords();
  }, [getWords]);

  return (
    <div className="home-page">
      {started ? (
        <CardList words={words} length={words.length} />
      ) : (
        <div className="home-container">
          <div className="info">
            <i className="fas fa-info-circle"></i>
            <p>
              Başlat butonuna bastığında kelimeler rastgele bir şekilde gelecek.
              Kelimenin anlamını ve örnek cümlesini görmek için kartın üzerine
              tıkla.
            </p>
          </div>
          <div className="start-btn-container">
            <button onClick={() => start()}>
              <i className="fas fa-play"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

Home.propTypes = {
  words: PropTypes.array.isRequired,
  getWords: PropTypes.func.isRequired,
  start: PropTypes.func.isRequired,
  started: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  words: state.words.words,
  started: state.words.started,
});

export default connect(mapStateToProps, { getWords, start })(Home);
