import roller from "/home/marv/react-projects/strength-shop/src/HomePage/ReviewsCarousel/Images/leg-roller.webp";
import Stars from "./Stars";

export default function Review9() {
  return (
    <div className="review-wrapper">
      <div className="review">
        <span>
          <Stars />
        </span>
        <span>
          DO YOU HAVE THIS
          <br /> IN 60MM FOR THO...
          <br />
        </span>
        <span>DO YOU HAVE THIS</span>
      </div>
      <div className="faint">
        <span>Tom</span> <br />
        <span>12/21/2022 </span>
      </div>
      <div className="review-img">
        <img src={roller} alt="roller" />
        <span>Leg Roller / Support At...</span>
      </div>
    </div>
  );
}
