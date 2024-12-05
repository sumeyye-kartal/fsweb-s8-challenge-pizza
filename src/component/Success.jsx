import React from "react";
import "../css/Success.css";
import Footer from "./Footer";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function Success() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const pizzaData = queryParams.get("pizzaData");
  const jsonPizzaData = JSON.parse(pizzaData);
  console.log(jsonPizzaData);

  return (
    <>
      <div className="success-content">
        <div>
          <img src="../assets/Iteration-1-assets/logo.svg" />
          <p className="success-text">lezzetin yolda</p>
          <h1>SİPARİŞ ALINDI</h1>
          <hr />
          <h3>Position Absolute Acı Pizza</h3>
        </div>

        <div className="success-mid">
          <p>
            Boyut:<span>{jsonPizzaData.size}</span>
          </p>

          <p>
            Hamur:<span>{jsonPizzaData.thick}</span>
          </p>

          <p>
            Ek Malzemeler:<span>{jsonPizzaData.pizzaItem.join(",")}</span>
          </p>
        </div>

        <div className="success-pay">
          <h3>Sipariş Toplamı</h3>
          <div>
            <p>Seçimler</p>
            <p>{jsonPizzaData.pizzaItem.length * 5}₺</p>
          </div>
          <div>
            <p>Toplam</p>
            <p>
              {jsonPizzaData.pizzaCount * 85 +
                jsonPizzaData.pizzaItem.length * 5}
              ₺
            </p>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default Success;
