import hooks from "/home/marv/react-projects/strength-shop/src/HomePage/ReviewsCarousel/Images/j_hook.webp";
import Stars from "./Stars";

export default function Review6() {
  return (
    <div className="review-wrapper">
      <div className="review">
        <span>
          <Stars />
        </span>
        <span>Rubber J hooks</span>
        <span>I bought these to...</span>
      </div>
      <div className="faint">
        <span>Graeme Roger</span> <br />
        <span>12/30/2022 </span>
      </div>
      <div className="review-img">
        <img src={hooks} alt="hooks" />
        <span>Rubber Coated J-Hook...</span>
      </div>
    </div>
  );
}
