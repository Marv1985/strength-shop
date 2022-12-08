import React from "react";
import "/home/marv/react-projects/strength-shop/src/HomePage/Main/homePage.css";
import CurrencyBar from "../CurrencyBar/CurrencyBar";
import Cart from "../NavBar/Components/Cart";
import Menus from "../NavBar/Components/Menus";
import Login from "../NavBar/Components/Login";
import Search from "../NavBar/Components/Search";

export default function HomePage() {
  return (
    <div>
      <CurrencyBar />
      <div className="nav-bar">
        <div>
          <Search />
          <Menus />
        </div>
        <div>
          <Login />
          <Cart />
        </div>
      </div>
    </div>
  );
}
