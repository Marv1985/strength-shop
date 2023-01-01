import "/home/marv/react-projects/strength-shop/src/HomePage/GuiMenuCarousel/GuiMenuCarouselCss/GuiMenuCarouselOne.css";
import { useState } from "react";
import CarouselP1 from "./CarouselP1";
import CarouselP2 from "./CarouselP2";
import CarouselP3 from "./CarouselP3";
import { useEffect } from "react";

export default function GuiMenuCarouselOne() {
  /* buttons functionality */
  const [buttonLeft1, setButtonLeft1] = useState(true);
  const [buttonLeft2, setButtonLeft2] = useState(false);
  const [buttonRight1, setButtonRight1] = useState(true);
  const [buttonRight2, setButtonRight2] = useState(false);

  /* carousel functionaility */
  const comps = [<CarouselP1 />, <CarouselP2 />, <CarouselP3 />];
  const [p1] = useState(true);
  const [index, setIndex] = useState(0);

  /* buttons functionality */
  useEffect(() => {
    if (index === 0) {
      setButtonLeft2(true);
      setButtonLeft1(false);
    }
    if (index > 0) {
      setButtonLeft2(false);
      setButtonLeft1(true);
    }
    if (index === 2) {
      setButtonRight2(true);
      setButtonRight1(false);
    }
    if (index < 2) {
      setButtonRight2(false);
      setButtonRight1(true);
    }
  }, [index]);

  /* function to scroll left */
  function left() {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    } else if (index <= 0) setIndex(comps.length - 1);
  }

  function right() {
    if (index >= 0) {
      setIndex((prevIndex) => prevIndex + 1);
    } else if (index <= 0) setIndex(comps.length + 1);
    if (index === 2) {
    }
  }

  return (
    <div className="max">
      {/* left arrow */}
      {buttonLeft1 ? (
        <button onClick={left} className="Larrow">
          <i className="Larrow-menu-right Ldown-menu-right"></i>
        </button>
      ) : null}
      {buttonLeft2 ? (
        <button className="left-button-opacity">
          <i className="Larrow-menu-right Ldown-menu-right"></i>
        </button>
      ) : null}
      <div className="carousel-outer-wrap">
        {p1 ? (
          <div
            className="outer"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {comps.map((com, index) => (
              <div className="inner" key={index}>
                {com}
              </div>
            ))}
          </div>
        ) : null}
      </div>
      {/* right arrow */}
      {buttonRight1 ? (
        <button onClick={right} className="Rarrow">
          <i className="Rarrow-menu-right Rdown-menu-right"></i>
        </button>
      ) : null}
      {buttonRight2 ? (
        <button className="right-button-opacity">
          <i className="Rarrow-menu-right Rdown-menu-right"></i>
        </button>
      ) : null}
    </div>
  );
}
