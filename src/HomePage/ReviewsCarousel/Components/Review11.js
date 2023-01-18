import curl from "/home/marv/react-projects/strength-shop/src/HomePage/ReviewsCarousel/Images/rotating-curl.webp";
import Stars from "./Stars";

export default function Review11() {
  return (
    <div className="review-wrapper">
      <div className="review">
        <span>
          <Stars />
        </span>
        <span>
          Très bien, mais est ce <br /> qu'on peut enlever l...
        </span>
        <span>
          Très bien, mais est ce <br /> qu'on peut enlever
        </span>
      </div>
      <div className="faint">
        <span>DBU</span> <br />
        <span>12/19/2022 </span>
      </div>
      <div className="review-img">
        <img src={curl} alt="curl bar" />
        <span>Rotating Curl Bar</span>
      </div>
    </div>
  );
}
