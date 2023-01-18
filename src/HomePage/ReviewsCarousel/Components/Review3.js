import slippers from "/home/marv/react-projects/strength-shop/src/HomePage/ReviewsCarousel/Images/slippers.webp";
import Stars from "./Stars";

export default function Review3() {
  return (
    <div className="review-wrapper">
      <div className="review">
        <span>
          <Stars />
        </span>
        <span>Just the job</span>
        <span>Comfortable and...</span>
      </div>
      <div className="faint">
        <span>Jong</span> <br />
        <span>01/07/2023 </span>
      </div>
      <div className="review-img">
        <img src={slippers} alt="slippers" />
        <span>Riot Deadlift Slippers-...</span>
      </div>
    </div>
  );
}
