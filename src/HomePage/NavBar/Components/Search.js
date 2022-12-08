import { useState, useEffect, useRef } from "react";
import logo from "/home/marv/react-projects/strength-shop/src/HomePage/NavBar/logo.avif";
import "/home/marv/react-projects/strength-shop/src/HomePage/NavBar/NavbarCss/Searchbar.css";
import searchIcon from "/home/marv/react-projects/strength-shop/src/HomePage/NavBar/search-icon.png";
import magnifierIcon from "/home/marv/react-projects/strength-shop/src/HomePage/NavBar/magnifier.png";

export default function Search() {
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

  return (
    <div className="search">
      {/* logo */}
      <a href={"home"}>
        <img className="search-logo" src={logo} alt="logo" />
      </a>
      <div className="search-button">
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
    </div>
  );
}
