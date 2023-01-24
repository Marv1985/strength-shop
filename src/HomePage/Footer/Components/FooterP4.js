import "/home/marv/react-projects/strength-shop/src/HomePage/Footer/Footer-Css/footer-4.css";
import { useState, useEffect } from "react";

export default function FooterP4() {
  const [foot1, setFoot1] = useState(true);

  /* detect window size */
  const [widthMenu, setWidthMenu] = useState(window.innerWidth);

  useEffect(() => {
    function reportWindowSize() {
      setWidthMenu(window.innerWidth);
      if (widthMenu < 1100) {
        setFoot1(false);
      } else if (widthMenu > 1100) {
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
    <div className="footer-p4-wrapper">
      {foot1 ? <h2 className="gone">JOIN OUR NEWS LETTER</h2> : null}

      <div className="subscribe">
        <input className="in" type="email" placeholder="Enter email here" />
        <div>
          <input type="checkbox" />
          <p>I agree to subscribe to updates from Strength Shop</p>
        </div>
        <button>Subscribe</button>
      </div>
    </div>
  );
}
