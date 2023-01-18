import chalk from "/home/marv/react-projects/strength-shop/src/HomePage/ReviewsCarousel/Images/chalk.webp";
import Stars from "./Stars";

export default function Review1() {
  return (
    <div className="review-wrapper">
      <div className="review">
        <span>
          <Stars />
        </span>
        <span>Amazing company</span>
        <span>Lovely service. Great...</span>
      </div>
      <div className="faint">
        <span>Alicia Laking </span> <br />
        <span>01/15/2023 </span>
      </div>
      <div className="review-img">
        <img src={chalk} alt="chalk" />
        <span>Magnesium Carbonate...</span>
      </div>
    </div>
  );
}
