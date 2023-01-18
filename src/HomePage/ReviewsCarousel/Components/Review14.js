import squatBar from "/home/marv/react-projects/strength-shop/src/HomePage/ReviewsCarousel/Images/squat-bar.webp";
import Stars from "./Stars";

export default function Review13() {
  return (
    <div className="review-wrapper">
      <div className="review">
        <span>
          <Stars />
        </span>
        <span>Fantastic bar</span>
        <span>Fantastic bar, used...</span>
      </div>
      <div className="faint">
        <span>B.S</span> <br />
        <span>12/15/2022 </span>
      </div>
      <div className="review-img">
        <img src={squatBar} alt="squat bar" />
        <span>Riot Olympic Safety Sq...</span>
      </div>
    </div>
  );
}
