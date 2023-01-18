import cage from "/home/marv/react-projects/strength-shop/src/HomePage/ReviewsCarousel/Images/cage.webp";
import Stars from "./Stars";

export default function Review7() {
  return (
    <div className="review-wrapper">
      <div className="review">
        <span>
          <Stars />
        </span>
        <span>Fantastic</span>
        <span>Just bought this rack...</span>
      </div>
      <div className="faint">
        <span>Jackie Culkin</span> <br />
        <span>12/29/2022 </span>
      </div>
      <div className="review-img">
        <img src={cage} alt="cage" />
        <span>Garage Cage - 1.85m hi...</span>
      </div>
    </div>
  );
}
