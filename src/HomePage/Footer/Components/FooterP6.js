import "/home/marv/react-projects/strength-shop/src/HomePage/Footer/Footer-Css/footer-6.css";
import amex from "/home/marv/react-projects/strength-shop/src/HomePage/Footer/Images/amex.png";
import apple from "/home/marv/react-projects/strength-shop/src/HomePage/Footer/Images/apple-pay.png";
import diners from "/home/marv/react-projects/strength-shop/src/HomePage/Footer/Images/diners-club.png";
import discover from "/home/marv/react-projects/strength-shop/src/HomePage/Footer/Images/discover.png";
import google from "/home/marv/react-projects/strength-shop/src/HomePage/Footer/Images/google-pay.png";
import maestro from "/home/marv/react-projects/strength-shop/src/HomePage/Footer/Images/maestro-card.webp";
import mastercard from "/home/marv/react-projects/strength-shop/src/HomePage/Footer/Images/Master-Card.png";
import paypal from "/home/marv/react-projects/strength-shop/src/HomePage/Footer/Images/paypal.png";
import shoppay from "/home/marv/react-projects/strength-shop/src/HomePage/Footer/Images/sp_pay.webp";
import visa from "/home/marv/react-projects/strength-shop/src/HomePage/Footer/Images/visa.png";

export default function FooterP6() {
  return (
    <div className="foot6-wrap">
      <div className="footer-p6-wrapper">
        <img src={amex} alt="amex pay" />
        <img src={apple} alt="apple pay" />
        <img src={diners} alt="diners club pay" />
        <img src={discover} alt="discover pay" />
        <div className="foot-p6-img">
          <img className="g" src={google} alt="google pay" />
        </div>
        <img className="maestro" src={maestro} alt="maestro" />
        <img className="mastercard" src={mastercard} alt="mastercard" />
        <div className="foot-p6-img">
          <img className="paypal" src={paypal} alt="paypal" />
        </div>
        <img className="shoppay" src={shoppay} alt="shop pay" />
      </div>
      <div className="foot-p6-img">
        <img className="visa" src={visa} alt="visa" />
      </div>
    </div>
  );
}
