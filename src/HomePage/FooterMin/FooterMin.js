import "/home/marv/react-projects/strength-shop/src/HomePage/FooterMin/FooterMin.css";
import FooterP1 from "../Footer/Components/FooterP1";
import FooterP4 from "../Footer/Components/FooterP4";
import FooterP6 from "../Footer/Components/FooterP6";
import copy from "/home/marv/react-projects/strength-shop/src/HomePage/Footer/Images/copyright.png";
import { useState } from "react";
import flag from "/home/marv/react-projects/strength-shop/src/HomePage/Footer/Images/united-kingdom.png";
import irish from "/home/marv/react-projects/strength-shop/src/HomePage/Footer/Images/ireland.png";
import euro from "/home/marv/react-projects/strength-shop/src/HomePage/Footer/Images/european-union.png";
import swiss from "/home/marv/react-projects/strength-shop/src/HomePage/Footer/Images/switzerland (1).png";
import usa from "/home/marv/react-projects/strength-shop/src/HomePage/Footer/Images/united-states.png";

export default function FooterMin() {
  const [line, setLine] = useState(true);
  const [line2, setLine2] = useState(false);

  const [line3, setLine3] = useState(true);
  const [line4, setLine4] = useState(false);

  function click() {
    if (line === true) {
      setLine(false);
      setLine2(true);
    }
    if (line2 === true) {
      setLine(true);
      setLine2(false);
    }
  }

  function click2() {
    if (line3 === true) {
      setLine3(false);
      setLine4(true);
    }
    if (line4 === true) {
      setLine3(true);
      setLine4(false);
    }
  }

  return (
    <div className="footer-min-wrapper">
      <div className="footer-min-wrap">
        <FooterP1 />
        <hr />

        {/* first dropdown */}
        <div onClick={click} className="foot-drop-1">
          <div className={line2 ? "k show1" : "hide1"}>
            <div className="footer-p2-wrapper">
              <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Delivery</li>
                <li>Careers</li>
                <li>Our Athletes</li>
                <li>Returns</li>
                <li>Newsletter</li>
              </ul>
            </div>
          </div>

          <h2 className="show2">STRENGTH SHOP UK</h2>
          <i
            className={line ? "arrow-width2 down-width2 show2 move" : "hide2"}
          ></i>
          <span className={line2 ? "foot-line show1" : "hide1"}></span>
        </div>
        <hr />

        {/* second dropdown */}
        <div onClick={click2} className="foot-drop-1 other">
          <div className={line4 ? "j show-height" : "hide1"}>
            <div className="footer-p3-wrapper">
              <div className="shop-country">
                <img src={flag} alt="uk" />
                <p>Strength Shop UK</p>
              </div>

              <div className="shop-country">
                <img src={irish} alt="irish" />
                <p>Strength Shop IE</p>
              </div>

              <div className="shop-country">
                <img src={euro} alt="euro" />
                <p>Strength Shop EU</p>
              </div>

              <div className="shop-country">
                <img className="swiss" src={swiss} alt="switzerland" />
                <p>Strength Shop CH</p>
              </div>

              <div className="shop-country">
                <img src={usa} alt="usa" />
                <p>Strength Shop USA</p>
              </div>
            </div>
          </div>
          <h2 className="show2">STRENGTH SHOP WORLDWIDE</h2>
          <i
            className={line3 ? "arrow-width2 down-width2 show2 move" : "hide2"}
          ></i>
          <span className={line4 ? "foot-line show1" : "hide1"}></span>
        </div>
        <hr />

        <div className="foot-drop-1">
          <h2 className="auto-hov">JOIN OUR NEWS LETTER</h2>
        </div>
        <div className="foot-sub">
          <FooterP4 />
        </div>
        <hr />
        <div className="footer-pay">
          <FooterP6 />
        </div>

        <div className="footer-p5-wrapper">
          <div className="foot-5-p1">
            <p className="no-pad">Search</p>
            <div className="line"></div>
            <p>Refund Policy</p>
            <div className="line"></div>
            <p>Terms of Service</p>
            <div className="line"></div>
            <p>Privacy Policy</p>
            <div className="line"></div>
            <p>Shopping Policy</p>
          </div>
          <div className="foot-5-p2">
            <p>
              Copyright <img src={copy} alt="copyright" /> 2023 Strength Shop
            </p>
            <p>Powered by Shopify</p>
          </div>
        </div>
      </div>
    </div>
  );
}
