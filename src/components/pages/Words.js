import React, { useState } from "react";

const Words = () => {
  const [showKnown, setShowKnown] = useState(true);
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
              <li>
                Bildiğim Kelime 1{" "}
                <button>
                  <i className="fas fa-pen"></i>
                </button>
              </li>
              <li>
                Bildiğim Kelime 2{" "}
                <button>
                  <i className="fas fa-pen"></i>
                </button>
              </li>
              <li>
                Bildiğim Kelime 3{" "}
                <button>
                  <i className="fas fa-pen"></i>
                </button>
              </li>
              <li>
                Bildiğim Kelime 4{" "}
                <button>
                  <i className="fas fa-pen"></i>
                </button>
              </li>
              <li>
                Bildiğim Kelime 5{" "}
                <button>
                  <i className="fas fa-pen"></i>
                </button>
              </li>
              <li>
                Bildiğim Kelime 6{" "}
                <button>
                  <i className="fas fa-pen"></i>
                </button>
              </li>
            </ul>
          </div>
          <div className={!showKnown ? "unknown active" : "unknown"}>
            <ul>
              <li>
                Bilmediğim Kelime 1{" "}
                <button>
                  <i className="fas fa-pen"></i>
                </button>
              </li>
              <li>
                Bilmediğim Kelime 2{" "}
                <button>
                  <i className="fas fa-pen"></i>
                </button>
              </li>
              <li>
                Bilmediğim Kelime 3{" "}
                <button>
                  <i className="fas fa-pen"></i>
                </button>
              </li>
              <li>
                Bilmediğim Kelime 4{" "}
                <button>
                  <i className="fas fa-pen"></i>
                </button>
              </li>
              <li>
                Bilmediğim Kelime 5{" "}
                <button>
                  <i className="fas fa-pen"></i>
                </button>
              </li>
              <li>
                Bilmediğim Kelime 6{" "}
                <button>
                  <i className="fas fa-pen"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Words;
