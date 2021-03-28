import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getWords } from "../../redux/actions";

const Home = ({ getWords, words }) => {
  useEffect(() => {
    getWords();
  }, [getWords]);

  return (
    <div className="home-page">
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
          <button>
            <i className="fas fa-play"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  words: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  words: state.words,
});

export default connect(mapStateToProps, { getWords })(Home);
