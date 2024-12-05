import React from "react";
import "../css/MenuCard.css";

function MenuCard() {
  return (
    <div className="menuCard-content">
      <div className="first-menu">
        <img src="../../Assets/Iteration-2-aseets/pictures/food-1.png" />
        <h2>Terminal Pizza</h2>
        <div className="likes">
          <p>4.9</p>
          <p>(200)</p>
          <p>60 ₺</p>
        </div>
      </div>

      <div className="second-menu">
        <img src="../../Assets/Iteration-2-aseets/pictures/food-2.png" />
        <h2>Positioun Absolute Acı Pizza</h2>
        <div className="likes">
          <p>4.9</p>
          <p>(200)</p>
          <p>60 ₺</p>
        </div>
      </div>

      <div className="third-menu">
        <img src="../../Assets/Iteration-2-aseets/pictures/food-3.png" />
        <h2>useEffect Tavuklu Burger</h2>
        <div className="likes">
          <p>4.9</p>
          <p>(200)</p>
          <p>60 ₺</p>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
