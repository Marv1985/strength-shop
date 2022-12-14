import skull from "/home/marv/react-projects/strength-shop/src/HomePage/GuiMenuCarousel/Images/skull.png";
import HoverDropdownButton1 from "./HoverButtons/HoverDropdownButton1";
import { HoverDropdownButton2 } from "./HoverButtons/HoverDropdownButton2";
import React from "react";
import { useState, useEffect } from "react";

export default function CarouselP2() {
  /* detect width */
  const [widthMenu, setWidthMenu] = useState(window.innerWidth);
  const [widthMenu2, setWidthMenu2] = useState(false);

  useEffect(() => {
    function reportWindowSize() {
      setWidthMenu(window.innerWidth);
      if (widthMenu < 1300) {
        setWidthMenu2(true);
      }
      if (widthMenu > 1300) {
        setWidthMenu2(false);
      }
    }
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
      <div className="carousel-inner-wrap test2">
        <div className={widthMenu2 ? "c2 adjust" : "c2"}>
          <div className="img6"></div>
          <div className="text">
            <div>Sandwich J-Hooks (Pair) - 75mm</div>
            <div>Strength Shop</div>
            <div>£89.99</div>
            <div>Inc. VAT</div>
          </div>
          {widthMenu2 ? (
            <div className="drop1">
              <HoverDropdownButton2 />
            </div>
          ) : (
            <div className="drop1">
              <HoverDropdownButton1 />
            </div>
          )}
        </div>

        <div className="c2 c3 adjust">
          <div className="img7"></div>
          <div className="text">
            <div>
              7mm Inferno Neoprene Knee Sleeves - Blue-Grey - IPF Approved
              (Pair)
            </div>
            <div>Strength Shop</div>
            <div>£44.99</div>
            <div>Inc. VAT</div>
          </div>
          <div className="drop1">
            <HoverDropdownButton2 />
          </div>
        </div>

        <div className="c2 c3 adjust">
          <div className="img8"></div>
          <div className="text">
            <div>
              7mm Inferno Neoprene Knee Sleeves - Dark Leopard - IPF Approved
              (Pair)
            </div>
            <div>Strength Shop</div>
            <div>£44.99</div>
            <div>Inc. VAT</div>
          </div>
          <div className="drop1">
            <HoverDropdownButton2 />
          </div>
        </div>

        <div className={widthMenu2 ? "c2 adjust" : "c2"}>
          <div className="img9"></div>
          <div className="text">
            <div>
              Z
              <span className="skull">
                <img src={skull} alt="" />
              </span>
              NE Bear Down Steel Golden Tides - Smelling Salts
            </div>
            <div>Zone</div>
            <div>£32.99</div>
            <div>Inc. VAT</div>
          </div>
          {widthMenu2 ? (
            <div className="drop1">
              <HoverDropdownButton2 />
            </div>
          ) : (
            <div className="drop1">
              <HoverDropdownButton1 />
            </div>
          )}
        </div>

        <div className={widthMenu2 ? "c2 adjust" : "c2"}>
          <div className="img10"></div>
          <div className="text">
            <div>
              Z
              <span className="skull">
                <img src={skull} alt="" />
              </span>
              NE Bear Down Steel Blood - Smelling Salts
            </div>
            <div>Zone</div>
            <div>£34.99</div>
            <div>Inc. VAT</div>
          </div>
          {widthMenu2 ? (
            <div className="drop1">
              <HoverDropdownButton2 />
            </div>
          ) : (
            <div className="drop1">
              <HoverDropdownButton1 />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
