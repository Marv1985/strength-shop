import jogging from "/home/marv/react-projects/strength-shop/src/HomePage/ReviewsCarousel/Images/jogging-bottoms.webp";
import Stars from "./Stars";

export default function Review4() {
  return (
    <div className="review-wrapper">
      <div className="review">
        <span>
          <Stars />
        </span>
        <span>10/10</span>
        <span>Great material with...</span>
      </div>
      <div className="faint">
        <span>Anthony Myers</span> <br />
        <span>01/04/2023 </span>
      </div>
      <div className="review-img">
        <img src={jogging} alt="jogging bottoms" />
        <span>Jogging Suit Trousers-...</span>
      </div>
    </div>
  );
}
