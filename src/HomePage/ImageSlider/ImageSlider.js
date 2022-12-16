import first from "/home/marv/react-projects/strength-shop/src/HomePage/ImageSlider/Images/Image-1.webp";
import second from "/home/marv/react-projects/strength-shop/src/HomePage/ImageSlider/Images/Image-2.webp";
import third from "/home/marv/react-projects/strength-shop/src/HomePage/ImageSlider/Images/Image-3.webp";
import "/home/marv/react-projects/strength-shop/src/HomePage/ImageSlider/ImageSliderCss/ImageSlider.css";
import firstP2 from "/home/marv/react-projects/strength-shop/src/HomePage/ImageSlider/Images/Image-1-pt2.webp";
import secondP2 from "/home/marv/react-projects/strength-shop/src/HomePage/ImageSlider/Images/Image-2-pt2.webp";
import thirdP2 from "/home/marv/react-projects/strength-shop/src/HomePage/ImageSlider/Images/Image-3-pt3.webp";

export function ImageSlider() {
  return (
    <div className="imageSlider">
      <a className="firstImage" href={"image-1"}>
        <img className="second-image" src={firstP2} alt="" />
        <img className="first-image" src={first} alt="" />
      </a>

      <a className="secondImage" href={"image-2"}>
        <img src={second} alt="" />
      </a>

      <a className="thirdImage" href={"image-2"}>
        <img src={third} alt="" />
      </a>

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
      <div className="dots">
        <div className="dot dot1"></div>
        <div className="dot dot2"></div>
        <div className="dot dot3"></div>
      </div>
    </div>
  );
}
