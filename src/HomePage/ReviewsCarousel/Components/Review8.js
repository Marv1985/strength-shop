import stand from "/home/marv/react-projects/strength-shop/src/HomePage/ReviewsCarousel/Images/stand.webp";
import Stars from "./Stars";

export default function Review8() {
  return (
    <div className="review-wrapper">
      <div className="review">
        <span>
          <Stars />
        </span>
        <span>
          Sturdy, cost
          <br /> effective, quick...
          <br />I awarded this an
        </span>
        <span></span>
      </div>
      <div className="faint">
        <span>M.D</span> <br />
        <span>12/22/2022 </span>
      </div>
      <div className="review-img">
        <img src={stand} alt="stand" />
        <span>Original Squat stands-...</span>
      </div>
    </div>
  );
}
