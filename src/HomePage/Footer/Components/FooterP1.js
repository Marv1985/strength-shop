import "/home/marv/react-projects/strength-shop/src/HomePage/Footer/Footer-Css/footer-1.css";
import f from "/home/marv/react-projects/strength-shop/src/HomePage/Footer/Images/facebook.png";
import insta from "/home/marv/react-projects/strength-shop/src/HomePage/Footer/Images/instagram.png";
import youTube from "/home/marv/react-projects/strength-shop/src/HomePage/Footer/Images/youtube.png";
import email from "/home/marv/react-projects/strength-shop/src/HomePage/Footer/Images/email.png";
import badge from "/home/marv/react-projects/strength-shop/src/HomePage/Footer/Images/badge.png";
import Stars from "/home/marv/react-projects/strength-shop/src/HomePage/ReviewsCarousel/Components/Stars.js";
import flag from "/home/marv/react-projects/strength-shop/src/HomePage/Footer/Images/united-kingdom.png";

export default function FooterP1() {
  return (
    <div className="footer-p1-wrapper">
      <h2>FOLLOW US</h2>

      <div className="footer-images">
        <div className="f-wrap">
          <img className="f" src={f} alt="facebook link" />
        </div>
        <div>
          <img src={insta} alt="instagram link" />
        </div>
        <div>
          <img src={youTube} alt="youtube link" />
        </div>
        <div>
          <img src={email} alt="email us" />
        </div>
      </div>

      <div className="footer-badge">
        <img src={badge} alt="badge" />
        <div className="badge-number">553</div>
        <Stars />
        <div className="badge-text">Verified Reviews</div>
      </div>

      <div className="union-jacks">
        <img src={flag} alt="flag" />
        <img src={flag} alt="flag" />
        <img src={flag} alt="flag" />
        <img src={flag} alt="flag" />
        <img src={flag} alt="flag" />
        <img src={flag} alt="flag" />
      </div>
    </div>
  );
}
