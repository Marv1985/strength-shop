import { useState, useEffect, useRef } from "react";
import logo from "/home/marv/react-projects/strength-shop/src/HomePage/NavBar/Images/logo.avif";
import "/home/marv/react-projects/strength-shop/src/HomePage/NavBar/NavbarCss/Searchbar.css";
import searchIcon from "/home/marv/react-projects/strength-shop/src/HomePage/NavBar/Images/search-icon.png";
import magnifierIcon from "/home/marv/react-projects/strength-shop/src/HomePage/NavBar/Images/magnifier.png";
import Menus from "./Menus";

export default function Search() {
  const [menu, setMenu] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const [isShrunk, setShrunk] = useState(true);
  useEffect(() => {
    const onScroll = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 280 ||
            document.documentElement.scrollTop > 280)
        ) {
          setMenu2(true);
          setToggleMenu(false);
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 220 &&
          document.documentElement.scrollTop < 220
        ) {
          setMenu(false);
          return false;
        }

        return isShrunk;
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [menu, toggleMenu]);

  const [suggestions, setSuggestions] = useState(false);
  const wrapperRef = useRef(null);
  ClickOutside(wrapperRef);
  /* ref to stop useEffect conflicting with popup click function */
  const reff = useRef(null);

  /* input dropdown menu removal */
  function ClickOutside(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          !reff.current.contains(event.target)
        ) {
          setSuggestions(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  /* input dropdown menu */
  function Dropdown() {
    setSuggestions(true);
  }

  /* toggle menu onClick */
  const displayMenu = () => {
    setToggleMenu(true);
    setMenu2(false);
    setMenu(true);
  };

  /* toggle menu icon onClick */
  const toggleHamburgerMenu = () => {
    setToggleMenu(false);
    setMenu2(true);
    setMenu(false);
  };

  return (
    <div className={isShrunk ? "search-shrink" : "search"}>
      {/* hamburger menu on shrink */}
      {toggleMenu ? (
        <div
          onClick={toggleHamburgerMenu}
          className={isShrunk ? "close" : "hamburger-shrink"}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      ) : null}
      {menu2 ? (
        <div
          onClick={displayMenu}
          className={isShrunk ? "hamburger" : "hamburger-shrink"}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      ) : null}
      {/* logo */}
      <a href={"home"}>
        <img className="search-logo" src={logo} alt="logo" />
      </a>
      <div className={isShrunk ? "search-shrink2" : "search-button"}>
        {/* input field and button */}
        <input
          ref={reff}
          onClick={Dropdown}
          type="text"
          placeholder="What are you looking for?"
        />
        <button type="button">
          <img className="search-icon" src={searchIcon} alt="search-icon" />
        </button>
        {/* input field onclick popup suggestions */}
        {suggestions ? (
          <div ref={wrapperRef} className="suggestions">
            <div className="popular-suggestions">
              <ul>
                <li className="suggestions-title">POPULAR SUGGESTIONS</li>
                <div className="icon-div icon1">
                  <img
                    className="div-icon"
                    src={magnifierIcon}
                    alt="search-icon"
                  />
                  <li className="suggest">lever belt</li>
                </div>
                <div className="icon-div">
                  <img
                    className="div-icon"
                    src={magnifierIcon}
                    alt="search-icon"
                  />
                  <li className="suggest">knee sleeves</li>
                </div>
                <div className="icon-div">
                  <img
                    className="div-icon"
                    src={magnifierIcon}
                    alt="search-icon"
                  />
                  <li className="suggest">wrist wraps</li>
                </div>
                <div className="icon-div">
                  <img
                    className="div-icon"
                    src={magnifierIcon}
                    alt="search-icon"
                  />
                  <li className="suggest">lifting straps</li>
                </div>
              </ul>
            </div>
            <div className="products">
              <ul>
                <li className="products-title">PRODUCTS</li>
                <li>Start typing for search results</li>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
      {menu ? (
        <div className="hamburger-menu">
          <Menus />
        </div>
      ) : null}
    </div>
  );
}
