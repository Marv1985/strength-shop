import carousel1 from "/home/marv/react-projects/strength-shop/src/HomePage/GuiMenuCarousel/Images/carousel-1.avif";
import HoverDropdownButton1 from "./HoverButtons/HoverDropdownButton1";
import { HoverDropdownButton2 } from "./HoverButtons/HoverDropdownButton2";
import React from "react";
import { useEffect, useState } from "react";

export default function CarouselP1() {
  const [text1, setText1] = useState(false);
  const [isShrunk, setShrunk] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 950 ||
            document.documentElement.scrollTop > 950)
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

  // /* first image hover */
  // const [secondary, setSecondary] = useState(false);
  // const [main, setMain] = useState(true);
  // const ref1 = useRef(null);

  // useEffect(() => {
  //   const node = ref1.current;

  //   function func() {
  //     setSecondary(true);
  //     setMain(false);
  //   }

  //   function func2() {
  //     setSecondary(false);
  //     setMain(true);
  //   }

  //   if (node) {
  //     node.addEventListener("mouseenter", func);
  //     node.addEventListener("mouseleave", func2);

  //     return () => {
  //       node.addEventListener("mouseenter", func);
  //       node.addEventListener("mouseleave", func2);
  //     };
  //   }
  // }, [main, secondary]);

  // /* second image hover */
  // const [secondary2, setSecondary2] = useState(false);
  // const [main2, setMain2] = useState(true);
  // const ref2 = useRef(null);

  // useEffect(() => {
  //   const node = ref2.current;

  //   function func() {
  //     setSecondary2(true);
  //     setMain2(false);
  //   }

  //   function func2() {
  //     setSecondary2(false);
  //     setMain2(true);
  //   }

  //   if (node) {
  //     node.addEventListener("mouseenter", func);
  //     node.addEventListener("mouseleave", func2);

  //     return () => {
  //       node.addEventListener("mouseenter", func);
  //       node.addEventListener("mouseleave", func2);
  //     };
  //   }
  // }, [main2, secondary2]);

  // /* third image hover */
  // const [secondary3, setSecondary3] = useState(false);
  // const [main3, setMain3] = useState(true);
  // const ref3 = useRef(null);

  // useEffect(() => {
  //   const node = ref3.current;

  //   function func() {
  //     setSecondary3(true);
  //     setMain3(false);
  //   }

  //   function func2() {
  //     setSecondary3(false);
  //     setMain3(true);
  //   }

  //   if (node) {
  //     node.addEventListener("mouseenter", func);
  //     node.addEventListener("mouseleave", func2);

  //     return () => {
  //       node.addEventListener("mouseenter", func);
  //       node.addEventListener("mouseleave", func2);
  //     };
  //   }
  // }, [main3, secondary3]);

  // /* fourth image hover */
  // const [secondary4, setSecondary4] = useState(false);
  // const [main4, setMain4] = useState(true);
  // const ref4 = useRef(null);

  // useEffect(() => {
  //   const node = ref4.current;

  //   function func() {
  //     setSecondary4(true);
  //     setMain4(false);
  //   }

  //   function func2() {
  //     setSecondary4(false);
  //     setMain4(true);
  //   }

  //   if (node) {
  //     node.addEventListener("mouseenter", func);
  //     node.addEventListener("mouseleave", func2);

  //     return () => {
  //       node.addEventListener("mouseenter", func);
  //       node.addEventListener("mouseleave", func2);
  //     };
  //   }
  // }, [main4, secondary4]);

  // /* fifth image hover */
  // const [secondary5, setSecondary5] = useState(false);
  // const [main5, setMain5] = useState(true);
  // const ref5 = useRef(null);

  // useEffect(() => {
  //   const node = ref5.current;

  //   function func() {
  //     setSecondary5(true);
  //     setMain5(false);
  //   }

  //   function func2() {
  //     setSecondary5(false);
  //     setMain5(true);
  //   }

  //   if (node) {
  //     node.addEventListener("mouseenter", func);
  //     node.addEventListener("mouseleave", func2);

  //     return () => {
  //       node.addEventListener("mouseenter", func);
  //       node.addEventListener("mouseleave", func2);
  //     };
  //   }
  // }, [main5, secondary5]);

  return (
    <div>
      <div className="carousel-inner-wrap test1">
        {/* images */}
        <div className="c1">
          <img src={carousel1} alt="" />
        </div>
        {/* c1 overlay */}
        <div className="c1-overlay">
          <div>
            {text1 ? <div className="m3">NEW PRODUCTS</div> : null}
            <br />
            {text1 ? (
              <div className="t2 m4">
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
        <div className="c2">
          <div className="img2"></div>
          <div className="text">
            <div>
              360 Rotating Handles
              <br />
              (Knurled)
            </div>
            <div>Strength Shop</div>
            <div>£49.99</div>
            <div>Inc. VAT</div>
          </div>
          <div className="drop1">
            <HoverDropdownButton1 />
          </div>
        </div>

        {/* image 3 */}
        <div className="c2 c3">
          <div className="img3"></div>
          <div className="text">
            <div>
              Notorious Lift -Notorious
              <br />
              Lifters Gen 2 - All Over Wave
            </div>
            <div>Notorious Lift</div>
            <div>£59.99</div>
            <div>Inc. VAT</div>
          </div>
          <div className="drop1">
            <HoverDropdownButton2 />
          </div>
        </div>

        {/* image 4 */}
        <div className="c2 c3">
          <div className="img4"></div>
          <div className="text">
            <div>
              Notorious Lift - Notorious
              <br />
              Lifters Gen 2 - Pagoda
            </div>
            <div>Notorious Lift</div>
            <div>£59.99</div>
            <div>Inc. VAT</div>
          </div>
          <div className="drop1">
            <HoverDropdownButton2 />
          </div>
        </div>

        {/* image 5 */}
        <div className="c2">
          <div className="img5"></div>
          <div className="text">
            <div>
              Sandwich J-Hooks (Pair) -<br />
              60mm
            </div>
            <div>Strength Shop</div>
            <div>£89.99</div>
            <div>Inc. VAT</div>
          </div>
          <div className="drop1">
            <HoverDropdownButton1 />
          </div>
        </div>
      </div>
    </div>
  );
}
