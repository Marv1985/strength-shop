import "/home/marv/react-projects/strength-shop/src/HomePage/Footer/footer.css";
import FooterP1 from "./Components/FooterP1";
import FooterP2 from "./Components/FooterP2";
import FooterP3 from "./Components/FooterP3";
import FooterP4 from "./Components/FooterP4";
import FooterP5 from "./Components/FooterP5";
import FooterP6 from "./Components/FooterP6";
import FooterMin from "../FooterMin/FooterMin";
import { useState, useEffect } from "react";

export default function Footer() {
  const [foot1, setFoot1] = useState(true);
  const [foot2, setFoot2] = useState(false);

  /* detect window size */
  const [widthMenu, setWidthMenu] = useState(window.innerWidth);

  useEffect(() => {
    function reportWindowSize() {
      setWidthMenu(window.innerWidth);
      if (widthMenu < 1100) {
        setFoot2(true);
        setFoot1(false);
      } else if (widthMenu > 1100) {
        setFoot2(false);
        setFoot1(true);
      }
    }

    /* IMPORTANT! add function here so it gets called immediately on any resize */
    reportWindowSize();

    // Trigger this function on resize
    window.addEventListener("load", reportWindowSize);
    window.addEventListener("resize", reportWindowSize);

    //  Cleanup for componentWillUnmount
    return () => {
      window.removeEventListener("resize", reportWindowSize);
      window.removeEventListener("load", reportWindowSize);
    };
  }, [widthMenu]);

  return (
    <div>
      {foot1 ? (
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
      ) : null}

      {foot2 ? <FooterMin /> : null}
    </div>
  );
}
