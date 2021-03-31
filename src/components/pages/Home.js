import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setActiveLink, start } from "../../redux/actions";
import CardList from "../card/CardList";

const Home = ({ words, start, started, setActiveLink }) => {
  useEffect(() => {
    setActiveLink();

    // eslint-disable-next-line
  }, []);

  return (
    <div className="home-page">
      {started ? (
        <CardList words={words} />
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
  start: PropTypes.func.isRequired,
  started: PropTypes.bool,
  setActiveLink: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  words: state.words.words,
  started: state.words.started,
});

export default connect(mapStateToProps, { start, setActiveLink })(Home);
