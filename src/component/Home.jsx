import React from "react";
import "../css/Home.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Icons from "./icons";
import Cards from "./Cards";
import Menu from "./Menu";
import MenuCard from "./MenuCard";
import Footer from "./Footer";

function Home() {
  const history = useHistory();
  const goOrderPizza = () => {
    history.push("/orderPizza");
  };
  return (
    <div>
      <div className="home-banner">
        <img className="Home-img" src="../assets/Iteration-1-assets/logo.svg" />
        <p>fırsatı kaçırma</p>
        <h1>
          KOD ACIKTIRIR
          <br />
          PİZZA, DOYURUR
        </h1>
        <button onClick={goOrderPizza} className="home-btn">
          ACIKTIM
        </button>
      </div>
      <div>
        <Icons />
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <Menu />
      </div>
      <div>
        <MenuCard />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
