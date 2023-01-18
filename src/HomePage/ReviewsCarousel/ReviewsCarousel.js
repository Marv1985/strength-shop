import "/home/marv/react-projects/strength-shop/src/HomePage/ReviewsCarousel/reviews-carousel.css";
import Stars from "./Components/Stars";
import Review1 from "./Components/Review1";
import Review2 from "./Components/Review2";
import Review3 from "./Components/Review3";
import Review4 from "./Components/Review4";
import { useState, useRef } from "react";

export default function ReviewsCarousel() {
  const comps = [<Review1 />, <Review2 />, <Review3 />, <Review4 />];

  return (
    <div className="review-carousel-wrapper">
      <div className="review-carousel-wrapper-2">
        {/* header */}
        <div className="header">
          <h2>WHAT OUR CUSTOMERS SAY</h2>
          <Stars />
          <span>from 807 reviews</span>
        </div>

        {/* main */}
        <div className="reviews-main">
          {/* carousel */}
          <div
            className="rev-car"
            style={{ transform: `translate3d(${-0 * 100}%, 0, 0)` }}
          >
            {comps.map((com, index) => (
              <div key={index}>{com}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
