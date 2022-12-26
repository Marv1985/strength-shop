import React from "react";
import Search from "/home/marv/react-projects/strength-shop/src/HomePage/NavBar/Components/Search.js";
import Menus from "./Menus";
import Login from "./Login";
import Cart from "./Cart";
import "/home/marv/react-projects/strength-shop/src/HomePage/NavBar/NavbarCss/NavBar.css";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [isShrunk, setShrunk] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 280 ||
            document.documentElement.scrollTop > 280)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 220 &&
          document.documentElement.scrollTop < 220
        ) {
          return false;
        }

        return isShrunk;
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="nav-bar">
      <div className="top-section">
        <Search />
        <Login />
        <Cart />
      </div>
      <div className={isShrunk ? "shrink-menus" : "menus menus2"}>
        <Menus />
      </div>
    </div>
  );
}
