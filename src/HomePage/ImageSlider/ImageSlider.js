import first from "/home/marv/react-projects/strength-shop/src/HomePage/ImageSlider/Images/Image-1.webp";
import second from "/home/marv/react-projects/strength-shop/src/HomePage/ImageSlider/Images/Image-2.webp";
import third from "/home/marv/react-projects/strength-shop/src/HomePage/ImageSlider/Images/Image-3.webp";
import fourth from "/home/marv/react-projects/strength-shop/src/HomePage/ImageSlider/Images/Image-4.webp";
import firstp2 from "/home/marv/react-projects/strength-shop/src/HomePage/ImageSlider/Images/Image-1-pt2.webp";
import secondp2 from "/home/marv/react-projects/strength-shop/src/HomePage/ImageSlider/Images/Image-2-pt2.webp";
import thirdp2 from "/home/marv/react-projects/strength-shop/src/HomePage/ImageSlider/Images/Image-3-pt2.webp";
import fourthp2 from "/home/marv/react-projects/strength-shop/src/HomePage/ImageSlider/Images/Image-4-pt2.webp";
import "/home/marv/react-projects/strength-shop/src/HomePage/ImageSlider/ImageSliderCss/ImageSlider.css";
import { useEffect, useState, useRef } from "react";
import React from "react";

export function ImageSlider() {
  const images = [first, fourth, second, third];
  const [p1, setP1] = useState(true);

  const imagesp2 = [firstp2, fourthp2, secondp2, thirdp2];
  const [p2, setP2] = useState(false);

  /* detect window size */
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [setWidth]);

  //and then
  useEffect(() => {
    if (width < 720) {
      setP1(false);
      setP2(true);
    } else {
      setP2(false);
      setP1(true);
    }
  }, [width]);

  const delay = 6000;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  /* images p1 */
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  /* images p2 */
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === imagesp2.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="imageSlider slideshow">
      {/* slider max */}
      {p1 ? (
        <a
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          href={"image"}
        >
          {images.map((pic, index) => (
            <img className="slide" src={pic} alt="" key={index} />
          ))}
        </a>
      ) : null}

      {/* slider min */}
      {p2 ? (
        <a
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          href={"image"}
        >
          {imagesp2.map((pic, index) => (
            <img className="slide" src={pic} alt="" key={index} />
          ))}
        </a>
      ) : null}

      {/* overlay */}
      <div className="overlay"></div>

      {/* arrows + special offer section */}
      <div className="arrows">
        <div className="left-arrow">
          <i className="arrow-menu-left down-menu-left"></i>
        </div>

        <div className="special-offer">
          <a href={"special-offer"}>XMAS SALE-UP TO 55% OFF</a>
        </div>

        <div className="right-arrow">
          <i className="arrow-menu-right down-menu-right"></i>
        </div>
      </div>
      <div className="dots slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
