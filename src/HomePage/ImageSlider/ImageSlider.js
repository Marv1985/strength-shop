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

export default function ImageSlider() {
  /* images and state for width more tha 720px */
  const images = [first, fourth, second, third];
  const [p1, setP1] = useState(true);

  /* centre ads */
  const [ad1, setAd1] = useState();
  const [ad2, setAd2] = useState();
  const [ad3, setAd3] = useState();
  const [ad4, setAd4] = useState();
  const [span, setSpan] = useState();
  const [span2, setSpan2] = useState();

  /* overlays for slider shading */
  const [overlay1, setOverlay1] = useState(false);
  const [overlay2, setOverlay2] = useState(true);

  /* images for less than 720px width */
  const imagesp2 = [firstp2, fourthp2, secondp2, thirdp2];

  /* detect window size */
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [setWidth]);

  //and then
  useEffect(() => {
    if (width >= 720) {
      setP1(true);
    } else {
      setP1(false);
    }
  }, [width]);

  const [auto, setAuto] = useState(true);
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  /* slider centre effects */
  function centreCover() {
    if (index === 0) {
      setAd1(true);
      setAd2(false);
      setSpan2(false);
      setAd3(false);
      setAd4(false);
      setSpan(false);
      setOverlay1(true);
      setOverlay2(false);
    }
    if (index === 1) {
      setAd1(false);
      setAd2(true);
      setSpan2(true);
      setAd3(false);
      setAd4(false);
      setSpan(false);
      setOverlay1(false);
      setOverlay2(true);
    }
    if (index === 2) {
      setAd1(false);
      setAd2(false);
      setSpan2(false);
      setAd3(true);
      setAd4(false);
      setSpan(false);
      setOverlay1(false);
      setOverlay2(false);
    }
    if (index === 3) {
      setAd1(false);
      setAd2(false);
      setSpan2(false);
      setAd3(false);
      setAd4(true);
      setSpan(true);
      setOverlay1(true);
      setOverlay2(false);
    }
  }
  /* images auto scroll*/
  useEffect(() => {
    centreCover();
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      if (auto) {
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 6000);
    return () => resetTimeout();
  });

  /* function to scroll left */
  function left() {
    setAuto(false);
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    } else if (index <= 0) setIndex(images.length - 1);
  }

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
      ) : (
        <a
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          href={"image"}
        >
          {imagesp2.map((pic, index) => (
            <img className="slide" src={pic} alt="" key={index} />
          ))}
        </a>
      )}

      {/* overlays for slider shading */}
      {overlay1 ? <div className="overlay"></div> : null}
      {overlay2 ? <div className="overlay2"></div> : null}

      {/* arrows + special offer section */}
      <div className="arrows">
        {/* left scroll */}
        <div onClick={left} className="left-arrow">
          <i className="arrow-menu-left down-menu-left"></i>
        </div>

        <div>
          {/* centre ads */}
          {ad1 ? (
            <div className="special-offer">
              <a href={"special-offer"}>XMAS SALE-UP TO 55% OFF</a>
            </div>
          ) : null}
          {ad2 ? (
            <div className="special-offer2">
              <a href={"special-offer"}>
                <span>NOW IPF APPROVED</span>
                <span></span>
              </a>
            </div>
          ) : null}
          {span2 ? (
            <div className="special-offer2-span">
              <a href={"special-offer"}>
                <span></span>
                <span>CALIBRATED BARS AND PLATES</span>
              </a>
            </div>
          ) : null}
          {ad3 ? (
            <div className="special-offer">
              <a href={"special-offer"}>XMAS GIFT IDEAS & VOUCHERS</a>
            </div>
          ) : null}
          {ad4 ? (
            <div className="special-offer2">
              <a href={"special-offer"}>
                <span>BELTS</span>
                <span></span>
              </a>
            </div>
          ) : null}
          {span ? (
            <div className="special-offer2-span">
              <a href={"special-offer"}>
                <span></span>
                <span>Lever \Prong \ Velcro</span>
              </a>
            </div>
          ) : null}
        </div>

        {/* right scroll */}
        <div
          onClick={() => {
            setAuto(false);
            setIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
          }}
          className="right-arrow"
        >
          <i className="arrow-menu-right down-menu-right"></i>
        </div>
      </div>
      <div className="dots slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            /* dots scroll */
            onClick={() => {
              setAuto(false);
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
