import belt from "/home/marv/react-projects/strength-shop/src/HomePage/ReviewsCarousel/Images/belt2.webp";
import Stars from "./Stars";

export default function Review12() {
  return (
    <div className="review-wrapper">
      <div className="review">
        <span>
          <Stars />
        </span>
        <span>
          Great belt & <br /> Incredible service
        </span>
        <span>
          Great belt <br /> & Incredible service
        </span>
      </div>
      <div className="faint">
        <span>Max</span> <br />
        <span>12/19/2022 </span>
      </div>
      <div className="review-img">
        <img src={belt} alt="belt" />
        <span>Garage Half Rack</span>
      </div>
    </div>
  );
}
