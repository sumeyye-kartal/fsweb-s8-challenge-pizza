import React from "react";
import "../css/Home.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Home() {
  const history = useHistory();
  const goOrderPizza = () => {
    history.push("/orderPizza");
  };
  return (
    <div className="home-banner">
      <img src="../assets/Iteration-1-assets/logo.svg" />
      <h1>
        KOD ACIKTIRIR
        <br />
        PİZZA, DOYURUR
      </h1>
      <button onClick={goOrderPizza} className="home-btn">
        ACIKTIM
      </button>
    </div>
  );
}

export default Home;
