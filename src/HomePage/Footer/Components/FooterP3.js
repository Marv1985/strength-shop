import "/home/marv/react-projects/strength-shop/src/HomePage/Footer/Footer-Css/footer-3.css";
import flag from "/home/marv/react-projects/strength-shop/src/HomePage/Footer/Images/united-kingdom.png";
import irish from "/home/marv/react-projects/strength-shop/src/HomePage/Footer/Images/ireland.png";
import euro from "/home/marv/react-projects/strength-shop/src/HomePage/Footer/Images/european-union.png";
import swiss from "/home/marv/react-projects/strength-shop/src/HomePage/Footer/Images/switzerland (1).png";
import usa from "/home/marv/react-projects/strength-shop/src/HomePage/Footer/Images/united-states.png";

export default function FooterP3() {
  return (
    <div className="footer-p3-wrapper">
      <h2>STRENGTH SHOP WORLDWIDE</h2>

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
  );
}
