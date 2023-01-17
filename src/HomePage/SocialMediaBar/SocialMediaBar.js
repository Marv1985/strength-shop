import "/home/marv/react-projects/strength-shop/src/HomePage/SocialMediaBar/social-media-bar.css";
import email from "/home/marv/react-projects/strength-shop/src/HomePage/SocialMediaBar/Images/email.png";
import facebook from "/home/marv/react-projects/strength-shop/src/HomePage/SocialMediaBar/Images/facebook.avif";
import instagram from "/home/marv/react-projects/strength-shop/src/HomePage/SocialMediaBar/Images/Instagram.avif";
import stars from "/home/marv/react-projects/strength-shop/src/HomePage/SocialMediaBar/Images/5-stars.png";
import { useState, useCallback, useRef, useEffect } from "react";

export default function SocialMediaBar() {
  /* detect width and move carousel to the right as screen adjusts */
  const [widthMenu, setWidthMenu] = useState(window.innerWidth);
  const elementRef = useRef(null);

  useEffect(() => {
    function reportWindowSize() {
      const element = elementRef.current;
      setWidthMenu(window.innerWidth);
      if (widthMenu < 850) {
        element.style.transform = `translateX(1%)`;
      }
      if (widthMenu < 830) {
        element.style.transform = `translateX(2%)`;
      }
      if (widthMenu < 810) {
        element.style.transform = `translateX(3%)`;
      }
      if (widthMenu < 750) {
        element.style.transform = `translateX(4%)`;
      }
      if (widthMenu < 730) {
        element.style.transform = `translateX(5%)`;
      }
      if (widthMenu < 665) {
        element.style.transform = `translateX(7%)`;
      }
      if (widthMenu < 630) {
        element.style.transform = `translateX(10%)`;
      }
      if (widthMenu < 580) {
        element.style.transform = `translateX(10.5%)`;
      }
      if (widthMenu < 550) {
        element.style.transform = `translateX(12%)`;
      }
      if (widthMenu < 510) {
        element.style.transform = `translateX(14%)`;
      }
      if (widthMenu < 485) {
        element.style.transform = `translateX(15.5%)`;
      }
      if (widthMenu < 460) {
        element.style.transform = `translateX(17%)`;
      }
      if (widthMenu < 420) {
        element.style.transform = `translateX(18.5%)`;
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
        if (position.x > 150) {
          position.x = 150;
        }
        if (position.x < -450) {
          position.x = -450;
        }
        if (widthMenu > 850) {
          position.x = 0;
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
    [position, setPosition, elementRef, widthMenu]
  );

  return (
    <div className="social-media-wrapper">
      <div
        ref={elementRef}
        onMouseDown={onMouseDown}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        className="second-social-media-wrapper"
      >
        <div className="news">
          <img src={email} alt="news letter" />
          <div>
            <span>NEWSLETTER SIGN UP</span>
            <p>
              Be the first to hear about <br /> new products & special <br />{" "}
              offers
            </p>
          </div>
        </div>

        <div className="facebook">
          <img src={facebook} alt="facebook" />
          <div>
            <span>FIND US ON FACEBOOK</span>
            <p>Strength Shop UK</p>
          </div>
        </div>

        <div className="instagram">
          <img src={instagram} alt="instagram" />
          <div>
            <span>
              FOLLOW US ON <br /> INSTAGRAM
            </span>
            <p>@strengthshop</p>
          </div>
        </div>

        <div className="trusted">
          <img src={stars} alt="trusted" />
          <div>
            <span>TRUSTED SINCE 2009 </span>
            <p>#strengthshop</p>
          </div>
        </div>
      </div>
    </div>
  );
}
