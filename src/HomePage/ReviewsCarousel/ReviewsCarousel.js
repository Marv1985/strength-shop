import "/home/marv/react-projects/strength-shop/src/HomePage/ReviewsCarousel/reviews-carousel.css";
import Stars from "./Components/Stars";
import Review1 from "./Components/Review1";
import Review2 from "./Components/Review2";
import Review3 from "./Components/Review3";
import Review4 from "./Components/Review4";
import Review5 from "./Components/Review5";
import Review6 from "./Components/Review6";
import Review7 from "./Components/Review7";
import Review8 from "./Components/Review8";
import Review9 from "./Components/Review9";
import Review10 from "./Components/Review10";
import Review11 from "./Components/Review11";
import Review12 from "./Components/Review12";
import Review13 from "./Components/Review13";
import Review14 from "./Components/Review14";
import Review15 from "./Components/Review15";
import Review16 from "./Components/Review16";
import { useState, useEffect, useRef } from "react";

export default function ReviewsCarousel() {
  const comps = [
    <Review1 />,
    <Review2 />,
    <Review3 />,
    <Review4 />,
    <Review5 />,
    <Review6 />,
    <Review7 />,
    <Review8 />,
    <Review9 />,
    <Review10 />,
    <Review11 />,
    <Review12 />,
    <Review13 />,
    <Review14 />,
    <Review15 />,
    <Review16 />,
  ];

  /*  const comps2 = [<Review5 />, <Review6 />, <Review7 />, <Review8 />];
  const comps3 = [<Review9 />, <Review10 />, <Review11 />, <Review12 />];
  const comps4 = [<Review13 />, <Review14 />, <Review15 />, <Review16 />]; */

  /* carousel 2 */
  /* detect screen width */
  const [widthMenu, setWidthMenu] = useState(window.innerWidth);
  const [carousel1, setCarousel1] = useState(true);
  const [carousel2, setCarousel2] = useState(false);

  useEffect(() => {
    function reportWindowSize() {
      setWidthMenu(window.innerWidth);
      if (widthMenu < 990) {
        setCarousel1(false);
        setCarousel2(true);
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

  function left2() {
    //console.log(index)
    if (index > 0) {
      console.log(index)
      setIndex((prevIndex) => prevIndex - .55);
    }
    if (index < 0.3) {
      setIndex(3.868);
    }
  }

  function right2() {
    //console.log(index)
    if (index <= 4) {
      console.log(index)
      setIndex((prevIndex) => prevIndex + .55);
    }
    if (index > 3.4) {
      setIndex(0);
    }
  }




  /* carousel 1 */

  /* images auto scroll*/
  const [auto] = useState(true);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      if (auto) {
        setIndex((prevIndex) => prevIndex + 0.25);
      }
      if(widthMenu < 990){
        setIndex((prevIndex) => prevIndex + 0.305);
      }
      if (index >= 3.37) {
        setIndex(0);
      }

    /*     // Trigger this function on resize
    window.addEventListener("load", setTimeout);
    window.addEventListener("resize", setTimeout);
    //  Cleanup for componentWillUnmount
    return () => {
      window.removeEventListener("resize", setTimeout);
      window.removeEventListener("load", setTimeout);
    }; */
     
    }, 5000);
    return () => resetTimeout();
  });

  /* function to scroll left */
  const [index, setIndex] = useState(0);

  function left() {
    //console.log(index)
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
    if (index === 0) {
      setIndex(3);
    }
  }

  function right() {
    //console.log(index)
    if (index < 3) {
      setIndex((prevIndex) => prevIndex + 1);
    }
    if (index === 3) {
      setIndex(0);
    }
  }

  return (
    <div className="review-carousel-wrapper">
      {carousel1 ? (
      <div className="review-carousel-wrapper-2">
        {/* header */}
        <div className="header">
          <h2>WHAT OUR CUSTOMERS SAY</h2>
          <Stars />
          <span>from 807 reviews</span>
        </div>

        {/* main */}
        <div className="reviews-main">
          {/* carousel */}
          <div
            className="rev-car"
            style={{ transform: `translate3d(${-index * 40}%, 0, 0)` }}>
            {comps.map((com, index) => (
              <div key={index}>{com}</div>
            ))}
          </div>
          
          {/* buttons */}
        </div>
        <div className="rev-buttons">
          <button onClick={left} className="left-button-2">
            <i className="Larrow-menu-right-2 Ldown-menu-right-2"></i>
          </button>
          <button onClick={right} className="right-button-2">
            <i className="Rarrow-menu-right-2 Rdown-menu-right-2"></i>
          </button>
        </div>
      </div>
      ): null}

{carousel2 ? (
      <div className="review-carousel-wrapper-2-p2">
        {/* header */}
        <div className="header">
          <h2>WHAT OUR CUSTOMERS SAY</h2>
          <Stars />
          <span>from 807 reviews</span>
        </div>

        {/* main */}
        <div className="reviews-main">
          {/* carousel */}
          <div
            className="rev-car"
            style={{ transform: `translate3d(${-index * 40}%, 0, 0)` }}>
            {comps.map((com, index) => (
              <div key={index}>{com}</div>
            ))}
          </div>
          
          {/* buttons */}
        </div>
        <div className="rev-buttons">
          <button onClick={left2} className="left-button-2">
            <i className="Larrow-menu-right-2 Ldown-menu-right-2"></i>
          </button>
          <button onClick={right2} className="right-button-2">
            <i className="Rarrow-menu-right-2 Rdown-menu-right-2"></i>
          </button>
        </div>
      </div>
      ): null}
    </div>
  );
}
