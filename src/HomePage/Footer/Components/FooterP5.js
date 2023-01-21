import "/home/marv/react-projects/strength-shop/src/HomePage/Footer/Footer-Css/footer-5.css";
import copy from "/home/marv/react-projects/strength-shop/src/HomePage/Footer/Images/copyright.png";

export default function FooterP5() {
  return (
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
  );
}
