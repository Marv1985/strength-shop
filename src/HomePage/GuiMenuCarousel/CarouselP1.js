import carousel1 from "/home/marv/react-projects/strength-shop/src/HomePage/GuiMenuCarousel/Images/carousel-1.avif";
import carousel2p1 from "/home/marv/react-projects/strength-shop/src/HomePage/GuiMenuCarousel/Images/carousel-2-p1.avif";
import carousel2p2 from "/home/marv/react-projects/strength-shop/src/HomePage/GuiMenuCarousel/Images/carousel-2-p2.avif";
import measurement from "/home/marv/react-projects/strength-shop/src/HomePage/GuiMenuCarousel/Images/rsz_test.jpg";
import carousel3p2 from "/home/marv/react-projects/strength-shop/src/HomePage/GuiMenuCarousel/Images/carousel-3-p2.avif";
import carousel4 from "/home/marv/react-projects/strength-shop/src/HomePage/GuiMenuCarousel/Images/carousel-4.avif";
import carousel5p1 from "/home/marv/react-projects/strength-shop/src/HomePage/GuiMenuCarousel/Images/carousel-5-p1.avif";
import carousel5p2 from "/home/marv/react-projects/strength-shop/src/HomePage/GuiMenuCarousel/Images/carousel-5-p2.avif";
import { useState, useRef, useEffect } from "react";
import HoverDropdownButton1 from "./HoverButtons/HoverDropdownButton1";

export default function CarouselP1() {
  /* first image hover */
  const [secondary, setSecondary] = useState(false);
  const [main, setMain] = useState(true);
  const ref1 = useRef(null);

  useEffect(() => {
    const node = ref1.current;

    function func() {
      setSecondary(true);
      setMain(false);
    }

    function func2() {
      setSecondary(false);
      setMain(true);
    }

    if (node) {
      node.addEventListener("mouseenter", func);
      node.addEventListener("mouseleave", func2);

      return () => {
        node.addEventListener("mouseenter", func);
        node.addEventListener("mouseleave", func2);
      };
    }
  }, [main, secondary]);

  /* second image hover */
  const [secondary2, setSecondary2] = useState(false);
  const [main2, setMain2] = useState(true);
  const ref2 = useRef(null);

  useEffect(() => {
    const node = ref2.current;

    function func() {
      setSecondary2(true);
      setMain2(false);
    }

    function func2() {
      setSecondary2(false);
      setMain2(true);
    }

    if (node) {
      node.addEventListener("mouseenter", func);
      node.addEventListener("mouseleave", func2);

      return () => {
        node.addEventListener("mouseenter", func);
        node.addEventListener("mouseleave", func2);
      };
    }
  }, [main2, secondary2]);

  /* third image hover */
  const [secondary3, setSecondary3] = useState(false);
  const [main3, setMain3] = useState(true);
  const ref3 = useRef(null);

  useEffect(() => {
    const node = ref3.current;

    function func() {
      setSecondary3(true);
      setMain3(false);
    }

    function func2() {
      setSecondary3(false);
      setMain3(true);
    }

    if (node) {
      node.addEventListener("mouseenter", func);
      node.addEventListener("mouseleave", func2);

      return () => {
        node.addEventListener("mouseenter", func);
        node.addEventListener("mouseleave", func2);
      };
    }
  }, [main3, secondary3]);

  /* fourth image hover */
  const [secondary4, setSecondary4] = useState(false);
  const [main4, setMain4] = useState(true);
  const ref4 = useRef(null);

  useEffect(() => {
    const node = ref4.current;

    function func() {
      setSecondary4(true);
      setMain4(false);
    }

    function func2() {
      setSecondary4(false);
      setMain4(true);
    }

    if (node) {
      node.addEventListener("mouseenter", func);
      node.addEventListener("mouseleave", func2);

      return () => {
        node.addEventListener("mouseenter", func);
        node.addEventListener("mouseleave", func2);
      };
    }
  }, [main4, secondary4]);

  /* fifth image hover */
  const [secondary5, setSecondary5] = useState(false);
  const [main5, setMain5] = useState(true);
  const ref5 = useRef(null);

  useEffect(() => {
    const node = ref5.current;

    function func() {
      setSecondary5(true);
      setMain5(false);
    }

    function func2() {
      setSecondary5(false);
      setMain5(true);
    }

    if (node) {
      node.addEventListener("mouseenter", func);
      node.addEventListener("mouseleave", func2);

      return () => {
        node.addEventListener("mouseenter", func);
        node.addEventListener("mouseleave", func2);
      };
    }
  }, [main5, secondary5]);

  return (
    <div>
      <div className="carousel-inner-wrap">
        {/* images */}
        <div className="c1">
          <img src={carousel1} alt="" />
        </div>
        {/* c1 overlay */}
        <div className="c1-overlay">
          <div>
            <span>NEW PRODUCTS</span>
            <br />
            <span>
              See more{" "}
              <i className="arrow-menu-right-c1 down-menu-right-c1"></i>
            </span>
          </div>
        </div>

        {main ? (
          <div ref={ref1} className="c2">
            <img src={carousel2p2} alt="" />
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
          </div>
        ) : null}

        {secondary ? (
          <div ref={ref1} className="c2 c2-drop">
            <img src={carousel2p1} alt="" />
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
            <div>
              <HoverDropdownButton1 />
            </div>
          </div>
        ) : null}

        {main2 ? (
          <div ref={ref2} className="c2">
            <img src={carousel3p2} alt="" />
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
          </div>
        ) : null}

        {secondary2 ? (
          <div ref={ref2} className="c2">
            <img src={measurement} alt="" />
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
          </div>
        ) : null}

        {main3 ? (
          <div ref={ref3} className="c2">
            <img src={carousel4} alt="" />
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
          </div>
        ) : null}
        {secondary3 ? (
          <div ref={ref3} className="c2">
            <img src={measurement} alt="" />
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
          </div>
        ) : null}

        {main4 ? (
          <div ref={ref4} className="c2">
            <img src={carousel5p1} alt="" />
            <div className="text">
              <div>
                Sandwich J-Hooks (Pair) -<br />
                60mm
              </div>
              <div>Strength Shop</div>
              <div>£89.99</div>
              <div>Inc. VAT</div>
            </div>
          </div>
        ) : null}

        {secondary4 ? (
          <div ref={ref4} className="c2">
            <img src={carousel5p2} alt="" />
            <div className="text">
              <div>
                Sandwich J-Hooks (Pair) -<br />
                60mm
              </div>
              <div>Strength Shop</div>
              <div>£89.99</div>
              <div>Inc. VAT</div>
            </div>
            <HoverDropdownButton1 />
          </div>
        ) : null}
      </div>
    </div>
  );
}
