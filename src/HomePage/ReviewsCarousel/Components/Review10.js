import rack from "/home/marv/react-projects/strength-shop/src/HomePage/ReviewsCarousel/Images/rack.webp";
import Stars from "./Stars";

export default function Review10() {
  return (
    <div className="review-wrapper">
      <div className="review">
        <span>
          <Stars />
        </span>
        <span>Great Space Saver!</span>
        <span>Love this rack, very...</span>
      </div>
      <div className="faint">
        <span>Max</span> <br />
        <span>12/19/2022 </span>
      </div>
      <div className="review-img">
        <img src={rack} alt="rack" />
        <span>Garage Half Rack</span>
      </div>
    </div>
  );
}
