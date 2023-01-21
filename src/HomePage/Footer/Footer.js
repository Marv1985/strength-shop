import "/home/marv/react-projects/strength-shop/src/HomePage/Footer/footer.css";
import FooterP1 from "./Components/FooterP1";
import FooterP2 from "./Components/FooterP2";
import FooterP3 from "./Components/FooterP3";
import FooterP4 from "./Components/FooterP4";
import FooterP5 from "./Components/FooterP5";
import FooterP6 from "./Components/FooterP6";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-wrap">
        <FooterP1 />
        <FooterP2 />
        <FooterP3 />
        <FooterP4 />
      </div>
      <div className="footer-bottom">
        <FooterP5 />
        <FooterP6 />
      </div>
    </div>
  );
}
