import "/home/marv/react-projects/strength-shop/src/HomePage/SecondGuiMenu/SecondGuiMenu.css";
import img1 from "/home/marv/react-projects/strength-shop/src/HomePage/SecondGuiMenu/second-gui-menu-images/second-menu-img1.webp";
import img2 from "/home/marv/react-projects/strength-shop/src/HomePage/SecondGuiMenu/second-gui-menu-images/second-menu-img2.webp";
import img3 from "/home/marv/react-projects/strength-shop/src/HomePage/SecondGuiMenu/second-gui-menu-images/second-menuimg3.webp";

export default function SecondGuiMenu() {
  return (
    <div className="main-second-wrap">
      <div className="second-menu-wrapper">
        <div className="sec-menu-img1">
          <img src={img1} alt="kettlebells" />
        </div>
        <div className="sec-menu-overlay1">
          <div className="sec-menu-overlay1-p2">
            <div className="sec-bells">KETTLEBELLS</div>
            <br />
            <div className="sec-iron">Cast Iron \ Competition</div>
          </div>
        </div>

        <div className="sec-menu-img2">
          <img src={img2} alt="ipf approved" />
        </div>
        <div className="sec-menu-overlay2">
          <div className="sec-menu-overlay2-p2">
            <div>ACCESSORIES</div>
          </div>
        </div>

        <div className="sec-menu-img3">
          <img src={img3} alt="accessories" />
        </div>
        <div className="sec-menu-overlay3">
          <div className="sec-menu-overlay3-p2">
            <div>IPF APPROVED</div>
          </div>
        </div>
      </div>
    </div>
  );
}
