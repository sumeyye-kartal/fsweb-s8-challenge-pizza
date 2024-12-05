import React from "react";
import "../css/Menu.css";
function Menu() {
  return (
    <div className="menu-content">
      <div className="menu-text">
        <p>en çok paketlenen menüler</p>
        <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
      </div>
      <div className="foods-types">
        <div className="type">
          <img src="../../Assets/Iteration-2-aseets/icons/1.svg" />
          <p>Ramen</p>
        </div>
        <div className="type-pizza">
          <img src="../../Assets/Iteration-2-aseets/icons/2.svg" />
          <p>Pizza</p>
        </div>
        <div className="type">
          <img src="../../Assets/Iteration-2-aseets/icons/3.svg" />
          <p>Burger</p>
        </div>
        <div className="type">
          <img src="../../Assets/Iteration-2-aseets/icons/4.svg" />
          <p>Frech fries</p>
        </div>
        <div className="type">
          <img src="../../Assets/Iteration-2-aseets/icons/5.svg" />
          <p>Fast food</p>
        </div>
        <div className="type">
          <img src="../../Assets/Iteration-2-aseets/icons/6.svg" />
          <p>Soft drinks</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
