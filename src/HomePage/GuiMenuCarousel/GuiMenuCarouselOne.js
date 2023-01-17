import "/home/marv/react-projects/strength-shop/src/HomePage/GuiMenuCarousel/GuiMenuCarouselCss/GuiMenuCarouselOne.css";
import { useState } from "react";
import CarouselP1 from "./CarouselP1";
import CarouselP2 from "./CarouselP2";
import CarouselP3 from "./CarouselP3";
import { useEffect, useRef, useCallback } from "react";

export default function GuiMenuCarouselOne() {
  /* detect width and move carousel to the right as screen adjusts */
  const [widthMenu, setWidthMenu] = useState(window.innerWidth);
  const elementRef = useRef(null);

  useEffect(() => {
    function reportWindowSize() {
      const element = elementRef.current;
      setWidthMenu(window.innerWidth);
      if (widthMenu > 1120) {
        element.style.transform = `translateX(0%)`;
      }
      if (widthMenu < 1120) {
        element.style.transform = `translateX(1%)`;
      }
      if (widthMenu < 1096) {
        element.style.transform = `translateX(2%)`;
      }
      if (widthMenu < 1070) {
        element.style.transform = `translateX(3%)`;
      }
      if (widthMenu < 1050) {
        element.style.transform = `translateX(3.5%)`;
      }
      if (widthMenu < 1030) {
        element.style.transform = `translateX(5%)`;
      }
      if (widthMenu < 1010) {
        element.style.transform = `translateX(5.5%)`;
      }
      if (widthMenu < 970) {
        element.style.transform = `translateX(6.5%)`;
      }
      if (widthMenu < 920) {
        element.style.transform = `translateX(8%)`;
      }
      if (widthMenu < 890) {
        element.style.transform = `translateX(9%)`;
      }
      if (widthMenu < 870) {
        element.style.transform = `translateX(10%)`;
      }
      if (widthMenu < 850) {
        element.style.transform = `translateX(11%)`;
      }
      if (widthMenu < 830) {
        element.style.transform = `translateX(12%)`;
      }
      if (widthMenu < 810) {
        element.style.transform = `translateX(13%)`;
      }
      if (widthMenu < 750) {
        element.style.transform = `translateX(14%)`;
      }
      if (widthMenu < 730) {
        element.style.transform = `translateX(15%)`;
      }
      if (widthMenu < 665) {
        element.style.transform = `translateX(17%)`;
      }
      if (widthMenu < 630) {
        element.style.transform = `translateX(18%)`;
      }
      if (widthMenu < 580) {
        element.style.transform = `translateX(20%)`;
      }
      if (widthMenu < 550) {
        element.style.transform = `translateX(21%)`;
      }
      if (widthMenu < 510) {
        element.style.transform = `translateX(22%)`;
      }
      if (widthMenu < 485) {
        element.style.transform = `translateX(23%)`;
      }
      if (widthMenu < 460) {
        element.style.transform = `translateX(24.5%)`;
      }
      if (widthMenu < 420) {
        element.style.transform = `translateX(25.5%)`;
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
  }, [widthMenu, elementRef]);

  /* drag */

  const [position, setPosition] = useState({ x: 0 });

  const [index, setIndex] = useState(0);

  const onMouseDown = useCallback(
    (event) => {
      const onMouseMove = (event) => {
        position.x += event.movementX;
        const element = elementRef.current;
        if (element) {
          element.style.transform = `translate(${position.x}px)`;
        }
        if (position.x > 0) {
          position.x = 0;
          setIndex(0);
        }
        if (position.x < 0) {
          element.style.transform = `translateX(-100%)`;
          setIndex(1);
        }
        if (position.x < -600) {
          element.style.transform = `translateX(-200%)`;
          setIndex(2);
        }
        if (position.x < -800) {
          position.x = -800;
          setIndex(0);
        }
        setPosition(position);
        event.stopPropagation();
        event.preventDefault();
      };
      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    },
    [position, setPosition, elementRef]
  );

  /* buttons functionality */
  const [buttonLeft1, setButtonLeft1] = useState(true);
  const [buttonLeft2, setButtonLeft2] = useState(false);
  const [buttonRight1, setButtonRight1] = useState(true);
  const [buttonRight2, setButtonRight2] = useState(false);

  /* carousel functionaility */
  const comps = [<CarouselP1 />, <CarouselP2 />, <CarouselP3 />];
  const [p1] = useState(true);

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
            ref={elementRef}
            onMouseDown={onMouseDown}
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
