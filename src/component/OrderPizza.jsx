import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/OrderPizza.css";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const selections = [
  "Pepperoni",
  "Tavuk Izgara",
  "Mısır",
  "Sarımsak",
  "Ananas",
  "Sosis",
  "Soğan",
  "Sucuk",
  "Biber",
  "Kabak",
  "Kanada Jambonu",
  "Domates",
  "Jalepeno",
];

const errorMessage = {
  username: "En az 4 karakter olmalı",
  malzemeler: "En az 4 en fazla 10 tane seçmelisiniz.",
};

function OrderPizza() {
  const [isValid, setIsValid] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    size: "",
    thick: "",
    ordernote: "",
    pizzaItem: [],
    pizzaCount: 0,
  });
  const [error, setError] = useState({
    username: true,
    size: true,
    thick: true,
    malzemeler: true,
  });
  const [radioCheck, setRadioCheck] = useState("");

  useEffect(() => {
    if (!error.username && !error.thick && !error.size && !error.malzemeler) {
      setIsValid(true);
    }
  }, [error]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) return;

    axios
      .post("https://reqres.in/api/pizza", formData)
      .then((response) => {
        console.log(response);
        const pizzaData = response.data;
        const queryParams = new URLSearchParams({
          pizzaData: JSON.stringify(pizzaData),
        }).toString();
        window.location.href = `/success?${queryParams}`;
      })
      .catch((error) => console.warn(error));
  };

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    let newFormData = { ...formData };
    if (type === "checkbox") {
      const newPizzaItem = formData.pizzaItem.includes(value)
        ? formData.pizzaItem.filter((item) => item !== value)
        : [...formData.pizzaItem, value];
      newFormData.pizzaItem = newPizzaItem;
    } else if (type === "radio") {
      newFormData[name] = value;
      setRadioCheck(value);
    } else {
      newFormData[name] = value;
    }

    setError((prevError) => ({
      ...prevError,
      username: newFormData.username.trim().length >= 4 ? false : true,
      size: newFormData.size === "" ? true : false,
      thick: newFormData.thick === "" ? true : false,
      malzemeler:
        newFormData.pizzaItem.length >= 4 && newFormData.pizzaItem.length <= 10
          ? false
          : true,
    }));
    setFormData(newFormData);
  };

  const handleCount = (islem) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      pizzaCount:
        islem === "topla" ? formData.pizzaCount + 1 : formData.pizzaCount - 1,
    }));
  };

  return (
    <>
      <header>
        <img src="../assets/Iteration-1-assets/logo.svg" />
      </header>
      <div className="explanation-section">
        <div className="explanation-content">
          <img src="../../Assets/Iteration-2-aseets/pictures/form-banner.png" />
          <nav>
            <NavLink to="/" className="first-a">
              Anasayfa-
            </NavLink>
            <a href="#" className="second-a">
              Sipariş Oluştur
            </a>
          </nav>
          <section className="description-content">
            <h3>Position Absolute Acı Pizza</h3>
            <div className="pizza-info">
              <p>85.50₺</p>
              <div>
                <p>4.9</p>
                <p>(200)</p>
              </div>
            </div>
            <p>
              Frontent Dev olarak hala position: absolute kullanıyorsan bu çok
              acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
              çeşitli diğer malzemlerle kaplanmış, daha sonra geleneksel olarak
              odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
              İtalyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen
              pizzetta denir.
            </p>
          </section>
        </div>
      </div>
      <div className="main-content">
        <main>
          <form onSubmit={handleSubmit}>
            <section className="pizza-feature">
              <fieldset className="boyut-section">
                <legend>Boyut Seç {error.size ? <span>*</span> : null}</legend>
                <div>
                  <label
                    htmlFor="küçük"
                    style={
                      radioCheck === "Küçük"
                        ? { backgroundColor: "#FFEECC" }
                        : {}
                    }
                  >
                    S
                    <input
                      id="küçük"
                      name="size"
                      type="radio"
                      value="Küçük"
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div>
                  <label
                    htmlFor="orta"
                    style={
                      radioCheck === "Orta"
                        ? { backgroundColor: "#FFEECC" }
                        : {}
                    }
                  >
                    M
                    <input
                      id="orta"
                      name="size"
                      type="radio"
                      value="Orta"
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div>
                  <label
                    htmlFor="büyük"
                    style={
                      radioCheck === "Büyük"
                        ? { backgroundColor: "#FFEECC" }
                        : {}
                    }
                  >
                    L
                    <input
                      id="büyük"
                      name="size"
                      type="radio"
                      value="Büyük"
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </fieldset>

              <fieldset className="hamur-section">
                <legend>Hamur Seç {error.thick ? <span>*</span> : null}</legend>
                <div className="hamur-btn">
                  <select name="thick" onChange={handleChange}>
                    <option value="">-Hamur Kalınlığı Seç-</option>
                    <option value="İnce">İnce</option>
                    <option value="Normal">Normal</option>
                    <option value="Kalın">Kalın</option>
                  </select>
                </div>
              </fieldset>
            </section>

            <section className="ekMalzemeler-section">
              <div className="ekMalzemeler-header">
                <legend>Ek Malzemeler</legend>
                <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
                {error.malzemeler ? (
                  <p id="error-message">{errorMessage.malzemeler}</p>
                ) : null}
              </div>
              <div className="malzeme-section">
                {selections.map((malzeme, index) => (
                  <div key={index}>
                    <label htmlFor={malzeme}>
                      <input
                        name="malzemeler"
                        id={malzeme}
                        type="checkbox"
                        value={malzeme}
                        onChange={handleChange}
                      />
                      {malzeme}
                    </label>
                  </div>
                ))}
              </div>
            </section>

            <fieldset className="username-section">
              <legend>Adınız Soyadınız</legend>
              <input
                name="username"
                type="text"
                placeholder="Ad Soyad giriniz"
                onChange={handleChange}
              />
              {error.username ? (
                <p id="error-message">{errorMessage.username}</p>
              ) : null}
            </fieldset>

            <fieldset className="siparis-section">
              <legend>Sipariş Notu</legend>
              <input
                type="text"
                name="ordernote"
                placeholder="Siparişine eklemek istediğin bir not var mı?"
                onChange={handleChange}
              />
            </fieldset>

            <hr />

            <section className="pay-section">
              <div className="button-section">
                <button
                  type="button"
                  onClick={() => handleCount("cikar")}
                  disabled={formData.pizzaCount <= 0}
                >
                  <span>-</span>
                </button>
                <p>
                  <span>{formData.pizzaCount}</span>
                </p>
                <button type="button" onClick={() => handleCount("topla")}>
                  <span>+</span>
                </button>
              </div>

              <div className="price-section">
                <div className="totalPay-section">
                  <h3>Sipariş Toplamı</h3>
                  <div className="choose-section">
                    <p>Seçimler</p>
                    <p>{formData.pizzaItem.length * 5}₺</p>
                  </div>
                  <div className="total-section">
                    <p>Toplam</p>
                    <p>{formData.pizzaCount * 85}₺</p>
                  </div>
                </div>
                <button className="siparis-button" disabled={!isValid}>
                  SİPARİŞ VER
                </button>
              </div>
            </section>
          </form>
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default OrderPizza;
