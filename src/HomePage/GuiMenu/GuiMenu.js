import "/home/marv/react-projects/strength-shop/src/HomePage/GuiMenu/GuiMenu.css";
import equipment from "/home/marv/react-projects/strength-shop/src/HomePage/GuiMenu/Images/Equipment_750x417.webp";
import bars from "/home/marv/react-projects/strength-shop/src/HomePage/GuiMenu/Images/bars_774x430.webp";
import weights from "/home/marv/react-projects/strength-shop/src/HomePage/GuiMenu/Images/calibrated_plates_437x437.webp";
import sleeves from "/home/marv/react-projects/strength-shop/src/HomePage/GuiMenu/Images/DSC_893x1117.webp";
import React from "react";
import { useState, useEffect } from "react";

export default function GuiMenu() {
  const [text1, setText1] = useState(false);
  const [isShrunk, setShrunk] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 180 ||
            document.documentElement.scrollTop > 180)
        ) {
          setText1(true);
          return true;
        }
        return isShrunk;
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [text1, isShrunk]);

  return (
    <div className="wrap-gui">
      <div className="gui-menu">
        {/* equipment */}
        <div className="equipment">
          <a href={"equipment"}>
            <img src={equipment} alt="equipment" />
          </a>
        </div>
        {/* equipment overlay */}

        <div className="equipment-overlay1">
          {text1 ? (
            <div className="equipment-overlay2">
              <div className="m1">EQUIPMENT</div>
              <br />
              <div className="m2">
                Rigs \ Squat Stands \ Cages \ Benches \ GHD
              </div>
            </div>
          ) : null}
        </div>

        {/* bars */}
        <div className="bars">
          <a href={"bars"}>
            <img src={bars} alt="bars" />
          </a>
        </div>
        {/* bars overlay */}
        <div className="bars-overlay1">
          {text1 ? (
            <div className="bars-overlay2">
              <div className="m1">BARS</div>
              <br />
              <div className="m2">Olympic \ Dumbbells \ Speciality</div>
            </div>
          ) : null}
        </div>
        {/* weights and plates */}
        <div className="weights">
          <a href={"weights"}>
            <img src={weights} alt="weights" />
          </a>
        </div>
        {/* weights overlay */}
        <div className="weights-overlay1">
          {text1 ? (
            <div className="weights-overlay2">
              <div className="m1">WEIGHT PLATES</div>
              <br />
              <div className="m2">Bumpers \ Steel \ Cast Iron</div>
            </div>
          ) : null}
        </div>
        {/* sleeves and wraps */}
        <div className="sleeves">
          <a href={"sleeves"}>
            <img src={sleeves} alt="sleeves" />
          </a>
        </div>
        {/* sleeves overlay */}
        <div className="sleeves-overlay1">
          {text1 ? (
            <div className="sleeves-overlay2">
              <div className="m1">SLEEVES & WRAPS</div>
              <br />
              <div className="m2">Knee \ Elbow \ Wrist \ Straps</div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
