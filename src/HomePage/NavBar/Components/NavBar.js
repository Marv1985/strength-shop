import React from "react";
import Search from "/home/marv/react-projects/strength-shop/src/HomePage/NavBar/Components/Search.js";
import Menus from "./Menus";
import Login from "./Login";
import Cart from "./Cart";
import "/home/marv/react-projects/strength-shop/src/HomePage/NavBar/NavbarCss/NavBar.css";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <div className="top-section">
        <Search />
        <Login />
        <Cart />
      </div>
      <div className="menus">
        <Menus />
      </div>
    </div>
  );
}
