import React from "react";
import "../css/Cards.css";

function Cards() {
  return (
    <div className="cards-section">
      <div className="cards-content">
        <div className="left-cards">
          <h2>
            Özel
            <br />
            Lezzetus
          </h2>
          <p>Position:Absolute Acı Burger</p>
          <button className="left-card-btn">SİPARİŞ VER</button>
        </div>
        <div className="right-cards">
          <div className="first-card">
            <h2>
              Hackathlon
              <br />
              Burger Menü
            </h2>
            <button className="first-card-btn">SİPARİŞ VER</button>
          </div>
          <div className="second-card">
            <p>
              <span className="red-text">Çoooook</span> hızlı <br /> npm gibi
              kurye
            </p>
            <button className="second-card-btn">SİPARİŞ VER</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
