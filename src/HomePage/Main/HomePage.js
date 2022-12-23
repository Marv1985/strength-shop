import React from "react";
import CurrencyBar from "/home/marv/react-projects/strength-shop/src/HomePage/CurrencyBar/CurrencyBar.js";
import NavBar from "../NavBar/Components/NavBar";
import ImageSlider from "../ImageSlider/ImageSlider";
import ExtraInfoBar from "../ExtraInfoBar/ExtraInfoBar";
import "/home/marv/react-projects/strength-shop/src/HomePage/Main/homePage.css";

export default function HomePage() {
  return (
    <div>
      <div>
        <CurrencyBar />
      </div>
      <div>
        <NavBar />
      </div>
      <div className="centre">
        <ImageSlider />
        <ExtraInfoBar />
      </div>
    </div>
  );
}
