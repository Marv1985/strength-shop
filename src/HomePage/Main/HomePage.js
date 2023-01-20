import React from "react";
import CurrencyBar from "/home/marv/react-projects/strength-shop/src/HomePage/CurrencyBar/CurrencyBar.js";
import NavBar from "../NavBar/Components/NavBar";
import ImageSlider from "../ImageSlider/ImageSlider";
import ExtraInfoBar from "../ExtraInfoBar/ExtraInfoBar";
import GuiMenu from "../GuiMenu/GuiMenu";
import SecondGuiMenu from "../SecondGuiMenu/SecondGuiMenu";
import GuiMenuCarouselOne from "../GuiMenuCarousel/GuiMenuCarouselOne";
import GuiMenuCarouselTwo from "../GuiMenuCarouselTwo/GuiMenuCarouselTwo";
import SocialMediaBar from "../SocialMediaBar/SocialMediaBar";
import ReviewsCarousel from "../ReviewsCarousel/ReviewsCarousel";
import Footer from "../Footer/Footer";
import "/home/marv/react-projects/strength-shop/src/HomePage/Main/homePage.css";

export default function HomePage() {
  return (
    <div>
      <div>
        <CurrencyBar />
      </div>
      <div className="sticky">
        <NavBar />
      </div>
      <div className="centre">
        <ImageSlider />
        <ExtraInfoBar />
        <GuiMenu />
        <GuiMenuCarouselOne />
        <SecondGuiMenu />
        <GuiMenuCarouselTwo />
        <SocialMediaBar />
        <ReviewsCarousel />
        <Footer />
      </div>
    </div>
  );
}
