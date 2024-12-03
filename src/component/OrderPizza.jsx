import React, { useState, useEffect } from "react";
import "../css/OrderPizza.css";
import axios from "axios";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

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
  const [count, setCount] = useState(0);
  const [pizzaItem, setPizzaItem] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    size: "",
    thick: "",
    ordernote: "",
    malzemeler: pizzaItem,
  });
  const [error, setError] = useState({
    username: true,
    size: true,
    thick: true,
    malzemeler: true,
  });

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
      .then((response) => console.log(response))
      .catch((error) => console.warn(error));
  };

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    let newFormData = {};
    let newPizzaItem = [];
    if (type === "checkbox") {
      if (pizzaItem.includes(value)) {
        newPizzaItem = pizzaItem.filter((item) => item !== value);
        newFormData = { ...formData, [name]: newPizzaItem };
      } else {
        newPizzaItem = [...pizzaItem, value];
        newFormData = { ...formData, [name]: newPizzaItem };
      }
    } else {
      newFormData = { ...formData, [name]: value };
    }

    setError((prevError) => ({
      ...prevError,
      username: newFormData.username.trim().length >= 4 ? false : true,
      size: newFormData.size === "" ? true : false,
      thick: newFormData.thick === "" ? true : false,
      malzemeler:
        newFormData.malzemeler.length >= 4 &&
        newFormData.malzemeler.length <= 10
          ? false
          : true,
    }));

    setPizzaItem(newPizzaItem);
    setFormData(newFormData);
  };

  return (
    <>
      <header>
        <img src="../assets/Iteration-1-assets/logo.svg" />
        <nav>
          <NavLink to="/" className="first-a">
            Anasayfa
          </NavLink>
          <a href="#" className="second-a">
            -Sipariş Oluştur
          </a>
        </nav>
      </header>

      <div className="main-content">
        <main>
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

          <form onSubmit={handleSubmit}>
            <section className="pizza-feature">
              <fieldset className="boyut-section">
                <legend>Boyut Seç {error.size ? <span>*</span> : null}</legend>

                <div>
                  <input
                    id="küçük"
                    name="size"
                    type="radio"
                    value="Küçük"
                    onChange={handleChange}
                  />
                  <label htmlFor="küçük">Küçük</label>
                </div>
                <div>
                  <input
                    id="orta"
                    name="size"
                    type="radio"
                    value="Orta"
                    onChange={handleChange}
                  />
                  <label htmlFor="orta">Orta</label>
                </div>
                <div>
                  <input
                    id="büyük"
                    name="size"
                    type="radio"
                    value="Büyük"
                    onChange={handleChange}
                  />
                  <label htmlFor="büyük">Büyük</label>
                </div>
              </fieldset>

              <fieldset className="hamur-section">
                <legend>Hamur Seç {error.thick ? <span>*</span> : null}</legend>
                <select name="thick" onChange={handleChange}>
                  <option value="">Hamur Kalınlığı</option>
                  <option value="İnce">İnce</option>
                  <option value="Normal">Normal</option>
                  <option value="Kalın">Kalın</option>
                </select>
              </fieldset>
            </section>

            <section className="ekMalzemeler-section">
              <fieldset>
                <legend>Ek Malzemeler</legend>
                <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
                {error.malzemeler ? (
                  <p id="error-message">{errorMessage.malzemeler}</p>
                ) : null}
                <div className="malzeme-section">
                  {selections.map((malzeme, index) => (
                    <label htmlFor={malzeme} key={index}>
                      <input
                        name="malzemeler"
                        id={malzeme}
                        type="checkbox"
                        value={malzeme}
                        checked={pizzaItem.includes(malzeme)}
                        onChange={handleChange}
                      />
                      {malzeme}
                    </label>
                  ))}
                </div>
              </fieldset>
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
                  onClick={() => setCount(count - 1)}
                  disabled={count <= 0}
                >
                  <span>-</span>
                </button>
                <p>
                  <span>{count}</span>
                </p>
                <button type="button" onClick={() => setCount(count + 1)}>
                  <span>+</span>
                </button>
              </div>
              <div className="price-section">
                <div className="totalPay-section">
                  <h3>Sipariş Toplamı</h3>
                  <div className="choose-section">
                    <p>Seçimler</p>
                    <p>25.00 ₺</p>
                  </div>
                  <div className="total-section">
                    <p>Toplam</p>
                    <p>110.50 ₺</p>
                  </div>
                </div>
                <div>
                  <button className="siparis-button" disabled={!isValid}>
                    SİPARİŞ VER
                  </button>
                </div>
              </div>
            </section>
          </form>
        </main>
      </div>
    </>
  );
}

export default OrderPizza;
