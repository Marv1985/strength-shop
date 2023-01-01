import { useState, useEffect, useRef } from "react";
import logo from "/home/marv/react-projects/strength-shop/src/HomePage/NavBar/Images/logo.avif";
import "/home/marv/react-projects/strength-shop/src/HomePage/NavBar/NavbarCss/Searchbar.css";
import searchIcon from "/home/marv/react-projects/strength-shop/src/HomePage/NavBar/Images/search-icon.png";
import magnifierIcon from "/home/marv/react-projects/strength-shop/src/HomePage/NavBar/Images/magnifier.png";
import Menus from "./Menus";
import WidthMenu from "./WidthMenu";

export default function Search() {
  const [menu, setMenu] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  /* detect width to set burger icon */
  const [widthMenu, setWidthMenu] = useState(window.innerWidth);
  const [widthMenu2, setWidthMenu2] = useState(false);
  const [widthMenuPopup, setWidthMenuPopup] = useState(false);
  useEffect(() => {
    function reportWindowSize() {
      setWidthMenu(window.innerWidth);
      if (widthMenu < 1038) {
        setWidthMenu2(true);
      }
      if (widthMenu > 1038) {
        setWidthMenu2(false);
        setWidthMenuPopup(false);
        document.body.style.overflowY = "unset";
      }
    }
    // Trigger this function on resize
    window.addEventListener("resize", reportWindowSize);
    //  Cleanup for componentWillUnmount
    return () => window.removeEventListener("resize", reportWindowSize);
  }, [widthMenu]);

  const Display = () => {
    return <Menus />;
  };

  const [isShrunk, setShrunk] = useState(false);
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

  /* seperate useeffect to disable one menu when the other is active */
  useEffect(() => {
    if (widthMenu < 1038) {
      setShrunk(false);
      setWidthMenu2(true);
    }
  }, [widthMenu, isShrunk]);

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

  /* width menu icon display */
  const displayWidthMenu = () => {
    setWidthMenuPopup(true);
    document.body.style.overflow = "hidden";
  };

  const toggleHamburgerMenuClose = () => {
    setWidthMenuPopup(false);
    setWidthMenu2(false);
    document.body.style.overflowY = "unset";
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

      {/* width menu hamburger icon */}
      {widthMenuPopup ? (
        <WidthMenu toggleHamburgerMenuClose={toggleHamburgerMenuClose} />
      ) : null}
      {widthMenu2 ? (
        <div onClick={displayWidthMenu} className="hamburger2">
          <span></span>
          <span></span>
          <span></span>
        </div>
      ) : null}
      {/* {widthMenuClose ? (
        <div
          onClick={toggleHamburgerMenuClose}
          className="close2"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      ) : null} */}

      {/* logo */}
      <a href={"#0"}>
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
        <button className="button-change-search">
          <img className="search-icon" src={searchIcon} alt="search-icon" />
        </button>
        {/* input field onclick popup suggestions */}
        {suggestions ? (
          <div
            ref={wrapperRef}
            className={isShrunk ? "suggestions-shrink" : "suggestions"}
          >
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
          <div>
            <div className="hamburger-menu-p2">{Display()}</div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
