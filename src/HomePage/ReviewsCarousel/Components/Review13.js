import belt from "/home/marv/react-projects/strength-shop/src/HomePage/ReviewsCarousel/Images/belt2.webp";
import Stars from "./Stars";

export default function Review13() {
  return (
    <div className="review-wrapper">
      <div className="review">
        <span>
          <Stars />
        </span>
        <span>Strong Belt</span>
        <span>Great for heavy days...</span>
      </div>
      <div className="faint">
        <span>M.S</span> <br />
        <span>12/26/2022 </span>
      </div>
      <div className="review-img">
        <img src={belt} alt="squat bar" />
        <span>10mm 3" Wide Double...</span>
      </div>
    </div>
  );
}
