import React from "react";
import "../css/Footer.css";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-start">
        <address className="communication-section">
          <img
            className="adres-logo"
            src="../../Assets/Iteration-2-aseets/footer/logo-footer.svg"
          />
          <div>
            <img
              className="footer-first-icon"
              src="../../Assets/Iteration-2-aseets/footer/icons/icon-1.png"
            />
            <p>
              341 Londonderry Road,
              <br />
              Istanbul Türkiye
            </p>
          </div>
          <div>
            <img
              className="footer-second-icon"
              src="../../Assets/Iteration-2-aseets/footer/icons/icon-2.png"
            />
            <p>aciktim@teknolojikyemekler.com</p>
          </div>
          <div>
            <img
              className="footer-third-icon"
              src="../../Assets/Iteration-2-aseets/footer/icons/icon-3.png"
            />
            <p>+90 216 1234567</p>
          </div>
        </address>

        <div className="footer-menu">
          <h3>Hot Menu</h3>
          <ul>
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathlon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz Konsol Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>

        <div className="instagram-img">
          <h3>Instagram</h3>
          <div className="first-instagram-img">
            <img src="../../Assets/Iteration-2-aseets/footer/insta/li-0.png" />
            <img src="../../Assets/Iteration-2-aseets/footer/insta/li-1.png" />
            <img src="../../Assets/Iteration-2-aseets/footer/insta/li-2.png" />
          </div>
          <div className="second-instagram-img">
            <img src="../../Assets/Iteration-2-aseets/footer/insta/li-3.png" />
            <img src="../../Assets/Iteration-2-aseets/footer/insta/li-4.png" />
            <img src="../../Assets/Iteration-2-aseets/footer/insta/li-5.png" />
          </div>
        </div>
      </div>
      <div className="footer-mid"></div>
      <div className="page-end">
        <p>© 2023 Teknolojik Yemekler. </p>
        <FaTwitter className="twiter-icon" />
      </div>
    </div>
  );
}

export default Footer;
