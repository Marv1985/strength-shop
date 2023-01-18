import jogging from "/home/marv/react-projects/strength-shop/src/HomePage/ReviewsCarousel/Images/jogging-bottoms.webp";
import Stars from "./Stars";

export default function Review2() {
  return (
    <div className="review-wrapper">
      <div className="review">
        <span>
          <Stars />
        </span>
        <span>Love these</span>
        <span>My favourite gym...</span>
      </div>
      <div className="faint">
        <span>Robbie Kelly</span> <br />
        <span>01/10/2023 </span>
      </div>
      <div className="review-img">
        <img src={jogging} alt="jogging bottoms" />
        <span>Jogging Suit Trousers-...</span>
      </div>
    </div>
  );
}
