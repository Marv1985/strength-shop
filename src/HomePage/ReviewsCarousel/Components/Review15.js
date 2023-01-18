import olyBar from "/home/marv/react-projects/strength-shop/src/HomePage/ReviewsCarousel/Images/oly-bar.webp";
import Stars from "./Stars";

export default function Review15() {
  return (
    <div className="review-wrapper">
      <div className="review">
        <span>
          <Stars />
        </span>
        <span>Awesome bar</span>
        <span>Try humbling weig...</span>
      </div>
      <div className="faint">
        <span>Erch</span> <br />
        <span>12/14/2022 </span>
      </div>
      <div className="review-img">
        <img src={olyBar} alt="olympic bar" />
        <span>Olympic Cambered Spi...</span>
      </div>
    </div>
  );
}
