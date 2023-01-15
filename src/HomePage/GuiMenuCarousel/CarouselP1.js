import carousel1 from "/home/marv/react-projects/strength-shop/src/HomePage/GuiMenuCarousel/Images/carousel-1.avif";
import HoverDropdownButton1 from "./HoverButtons/HoverDropdownButton1";
import { HoverDropdownButton2 } from "./HoverButtons/HoverDropdownButton2";
import React from "react";
import { useEffect, useState } from "react";
import one from "/home/marv/react-projects/strength-shop/src/HomePage/GuiMenuCarouselTwo/Images/1.avif";

export default function CarouselP1() {
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

  const [text1, setText1] = useState(false);
  const [isShrunk, setShrunk] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 1100 ||
            document.documentElement.scrollTop > 1100)
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

  const [text2, setText2] = useState(false);
  const [isShrunk2, setShrunk2] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShrunk2((isShrunk2) => {
        if (
          !isShrunk2 &&
          (document.body.scrollTop > 2200 ||
            document.documentElement.scrollTop > 2200)
        ) {
          setText2(true);
          return true;
        }

        return isShrunk2;
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [text2, isShrunk2]);

  return (
    <div>
      <div className="carousel-inner-wrap test1">
        {/* images */}
        <div className="c1">
          <img className="dis-none" src={carousel1} alt="" />
          <img src={one} alt="alternative img" />
        </div>
        {/* c1 overlay */}
        <div className="c1-overlay">
          <div>
            {text1 ? (
              <div className="dis-two">
                <div className="m3">NEW PRODUCTS</div>
                {text2 ? <div className="m3">STRONGMAN</div> : null}
              </div>
            ) : null}
            <br />
            {text1 ? (
              <div className="t2 m4 dis-none">
                <div className="texte">See more </div>

                <div className="svg">
                  <svg>
                    <defs>
                      <marker
                        id="m"
                        markerWidth="4"
                        markerHeight="8"
                        refX="0"
                        refY="1"
                        viewBox="0 0 1 2"
                      >
                        <polygon points="0,0 0,1 0,2" fill="white" />
                      </marker>
                    </defs>
                    <line
                      x1="0"
                      y1="50%"
                      x2="100%"
                      y2="50%"
                      strokeWidth="2"
                      markerEnd="url(#m)"
                      stroke="white"
                    />
                  </svg>
                </div>
                <div className="a-head">
                  <i className="arrow-menu-right-c1 down-menu-right-c1"></i>
                </div>
              </div>
            ) : null}
            {text2 ? (
              <div className="t2 m4 nones">
                <div className="texte">See more </div>

                <div className="svg">
                  <svg>
                    <defs>
                      <marker
                        id="m"
                        markerWidth="4"
                        markerHeight="8"
                        refX="0"
                        refY="1"
                        viewBox="0 0 1 2"
                      >
                        <polygon points="0,0 0,1 0,2" fill="white" />
                      </marker>
                    </defs>
                    <line
                      x1="0"
                      y1="50%"
                      x2="100%"
                      y2="50%"
                      strokeWidth="2"
                      markerEnd="url(#m)"
                      stroke="white"
                    />
                  </svg>
                </div>
                <div className="a-head">
                  <i className="arrow-menu-right-c1 down-menu-right-c1"></i>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* image 2 */}
        <div className={widthMenu2 ? "c2 adjust d2" : "c2 d2"}>
          <div className="img2"></div>
          <div className="im2"></div>
          <div className="text text1">
            <div>360 Rotating Handles (Knurled)</div>
            <div>Strength Shop</div>
            <div>£49.99</div>
            <div>Inc. VAT</div>
          </div>
          {/* second carousel text */}
          <div className="text text2">
            <div>Double Layer Strongman Sandbags</div>
            <div>Strength Shop</div>
            <div>£59.99 - £89.99</div>
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
          <div className="drop3">
            <HoverDropdownButton2 />
          </div>
        </div>

        {/* image 3 */}
        <div className="c2 c3 adjust d1">
          <div className="img3"></div>
          <div className="im3"></div>
          <div className="text text1">
            <div>Notorious Lift -Notorious Lifters Gen 2 - All Over Wave</div>
            <div>Notorious Lift</div>
            <div>£59.99</div>
            <div>Inc. VAT</div>
          </div>
          {/* second carousel text */}
          <div className="text text2">
            <div>Throwing Sandbags</div>
            <div>Strength Shop</div>
            <div>£84.99</div>
            <div>Inc. VAT</div>
          </div>
          <div className="drop1">
            <HoverDropdownButton2 />
          </div>
          <div className="drop2">
            <HoverDropdownButton1 />
          </div>
        </div>

        {/* image 4 */}
        <div className="c2 c3 adjust d1">
          <div className="img4"></div>
          <div className="im4"></div>
          <div className="text text1">
            <div>Notorious Lift - Notorious Lifters Gen 2 - Pagoda</div>
            <div>Notorious Lift</div>
            <div>£59.99</div>
            <div>Inc. VAT</div>
          </div>
          {/* second carousel text */}
          <div className="text text2">
            <div>Adjustable Yoke Training Station</div>
            <div>Strength Shop</div>
            <div>£279.99</div>
            <div>Inc. VAT</div>
          </div>
          <div className="drop1">
            <HoverDropdownButton2 />
          </div>
          <div className="drop2">
            <HoverDropdownButton1 />
          </div>
        </div>

        {/* image 5 */}
        <div className={widthMenu2 ? "c2 adjust d1" : "c2 d1"}>
          <div className="img5"></div>
          <div className="im5"></div>
          <div className="text text1">
            <div>Sandwich J-Hooks (Pair) - 60mm</div>
            <div>Strength Shop</div>
            <div>£89.99</div>
            <div>Inc. VAT</div>
          </div>
          {/* second carousel text */}
          <div className="text text2">
            <div>Riot Yoke</div>
            <div>Strength Shop</div>
            <div>£449.99</div>
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
          <div className="drop2">
            <HoverDropdownButton1 />
          </div>
        </div>
      </div>
    </div>
  );
}
