import shoes from "/home/marv/react-projects/strength-shop/src/HomePage/ReviewsCarousel/Images/shoe.webp";
import Stars from "./Stars";

export default function Review16() {
  return (
    <div className="review-wrapper">
      <div className="review">
        <span>
          <Stars />
        </span>
        <span>Size</span>
        <span>Your size chart says...</span>
      </div>
      <div className="faint">
        <span>J</span> <br />
        <span>12/07/2022 </span>
      </div>
      <div className="review-img">
        <img src={shoes} alt="shoes" />
        <span>Notorious Lift - Notorio...</span>
      </div>
    </div>
  );
}
