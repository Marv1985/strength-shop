import belt from "/home/marv/react-projects/strength-shop/src/HomePage/ReviewsCarousel/Images/belt.webp";
import Stars from "./Stars";

export default function Review5() {
  return (
    <div className="review-wrapper">
      <div className="review">
        <span>
          <Stars />
        </span>
        <span>Great belt</span>
        <span>Got this as my wider...</span>
      </div>
      <div className="faint">
        <span>Graeme Roger</span> <br />
        <span>12/30/2022 </span>
      </div>
      <div className="review-img">
        <img src={belt} alt="belt" />
        <span>10mm Lever Belt 3" Wi...</span>
      </div>
    </div>
  );
}
