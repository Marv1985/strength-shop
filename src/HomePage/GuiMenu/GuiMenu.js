import "/home/marv/react-projects/strength-shop/src/HomePage/GuiMenu/GuiMenu.css";
import equipment from "/home/marv/react-projects/strength-shop/src/HomePage/GuiMenu/Images/Equipment_750x417.webp";
import bars from "/home/marv/react-projects/strength-shop/src/HomePage/GuiMenu/Images/bars_774x430.webp";
import weights from "/home/marv/react-projects/strength-shop/src/HomePage/GuiMenu/Images/calibrated_plates_437x437.webp";
import sleeves from "/home/marv/react-projects/strength-shop/src/HomePage/GuiMenu/Images/DSC_893x1117.webp";

export default function GuiMenu() {
  return (
    <div className="wrap-gui">
      <div className="gui-menu">
        {/* equipment */}
        <div className="equipment">
          <a href={"equipment"}>
            <img src={equipment} alt="equipment" />
          </a>
        </div>
        {/* bars */}
        <div className="bars">
          <a href={"bars"}>
            <img src={bars} alt="bars" />
          </a>
        </div>
        {/* weights and plates */}
        <div className="weights">
          <a href={"weights"}>
            <img src={weights} alt="weights" />
          </a>
        </div>
        {/* sleeves and wraps */}
        <div className="sleeves">
          <a href={"sleeves"}>
            <img src={sleeves} alt="sleeves" />
          </a>
        </div>
      </div>
    </div>
  );
}
