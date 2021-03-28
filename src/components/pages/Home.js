import React from "react";

const Home = () => {
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

export default Home;
