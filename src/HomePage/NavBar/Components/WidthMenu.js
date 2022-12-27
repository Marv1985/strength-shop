import "/home/marv/react-projects/strength-shop/src/HomePage/NavBar/NavbarCss/WidthMenu.css";
import user from "/home/marv/react-projects/strength-shop/src/HomePage/NavBar/Images/user-2.png";
import { useState } from "react";
import CurrencyBar2 from "../../CurrencyBar/CurrencyBar2";

export default function WidthMenu(props) {
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [toggleThree, setToggleThree] = useState(false);
  const [toggleFour, setToggleFour] = useState(false);
  const [toggleFive, setToggleFive] = useState(false);
  const [toggleSub, setToggleSub] = useState(false);
  const [buttonBackground, setButtonBackground] = useState(true);
  const [buttonBackground2, setButtonBackground2] = useState(true);
  const [buttonBackground3, setButtonBackground3] = useState(true);
  const [buttonBackground4, setButtonBackground4] = useState(true);
  const [buttonBackground5, setButtonBackground5] = useState(true);
  const [buttonBackground6, setButtonBackground6] = useState(true);

  function toggle1() {
    setToggleOne((prevToggle) => !prevToggle);
    setButtonBackground((prevToggle) => !prevToggle);
  }
  function toggle2() {
    setToggleTwo((prevToggle) => !prevToggle);
    setButtonBackground2((prevToggle) => !prevToggle);
  }
  function toggle3() {
    setToggleThree((prevToggle) => !prevToggle);
    setButtonBackground3((prevToggle) => !prevToggle);
  }
  function toggle4() {
    setToggleFour((prevToggle) => !prevToggle);
    setButtonBackground4((prevToggle) => !prevToggle);
  }
  function toggle5() {
    setToggleFive((prevToggle) => !prevToggle);
    setButtonBackground5((prevToggle) => !prevToggle);
  }
  function toggleSubs() {
    setToggleSub((prevToggle) => !prevToggle);
    setButtonBackground6((prevToggle) => !prevToggle);
  }

  const { toggleHamburgerMenuClose } = props;
  return (
    <div className="main-width-wrapper">
      <div className="width-menu-wrapper"></div>
      <div className="width-menu">
        <div className="width-menu-top">
          {/* user icon */}
          <div className="login2">
            <a href={"#0"}>
              <img className="user-image" src={user} alt="user" />
              <span>LOGIN</span>
            </a>
          </div>

          {/* close button */}
          <div onClick={toggleHamburgerMenuClose} className="close2">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* main menu section */}
        <div className="width-menu-section">
          <div className="width-menu-div">
            <a href={"#0"}>BOXING DAY SALE</a>
          </div>

          <div className="width-one">
            <div className="width-menu-div-button">
              <a href={"#0"}>WEIGHTS & BARS</a>
              <button
                onClick={toggle1}
                className={buttonBackground ? "width-button" : "button-change"}
              >
                <i
                  className={
                    buttonBackground ? "arrow-width down-width" : "line2"
                  }
                ></i>
              </button>
            </div>
            {toggleOne ? (
              <div className="toggle-one">
                <ul>
                  <li>Weight Plates</li>
                  <li>Bars</li>
                  <li>Collars</li>
                  <li>Dumbbells</li>
                  <li>Kettlebells</li>
                  <li>Medicine Balls</li>
                  <li>IPF Approved</li>
                </ul>
              </div>
            ) : null}
          </div>

          <div className="width-one">
            <div className="width-menu-div-button">
              <a href={"#0"}>EQUIPMENT</a>
              <button
                onClick={toggle2}
                className={buttonBackground2 ? "width-button" : "button-change"}
              >
                <i
                  className={
                    buttonBackground2 ? "arrow-width down-width" : "line2"
                  }
                ></i>
              </button>
            </div>
            {toggleTwo ? (
              <div className="toggle-one">
                <ul>
                  <li>Cages & Squat Stands</li>
                  <li>Benches</li>
                  <li>Rigs</li>
                  <li>Strongman Equipment</li>
                  <li>Home Gym Equipment</li>
                  <li>Conditioning</li>
                  <li>GHDs & Hyperextensions</li>
                  <li>Bodyweight Training</li>
                  <li>Plyo Boxes</li>
                  <li>Other Equipment</li>
                  <li>Matting</li>
                  <li>Storage</li>
                </ul>
              </div>
            ) : null}
          </div>

          <div className="width-one">
            <div className="width-menu-div-button">
              <a href={"#0"}>SUPPORT GEAR</a>
              <button
                onClick={toggle3}
                className={buttonBackground3 ? "width-button" : "button-change"}
              >
                <i
                  className={
                    buttonBackground3 ? "arrow-width down-width" : "line2"
                  }
                ></i>
              </button>
            </div>
            {toggleThree ? (
              <div className="toggle-one">
                <ul className="hover-cancel">
                  <li className="submenu">
                    Belts{" "}
                    <button
                      onClick={toggleSubs}
                      className={
                        buttonBackground6 ? "width-button2" : "button-change2"
                      }
                    >
                      <i
                        className={
                          buttonBackground6
                            ? "arrow-width2 down-width2"
                            : "line2"
                        }
                      ></i>
                    </button>
                  </li>
                  {toggleSub ? (
                    <div className="toggle-one submenu-margin">
                      <ul>
                        <li className="space">
                          Single & Double Prong Buckle <br />
                          Belts
                        </li>
                        <li>Strongman</li>
                        <li>Weightlifting</li>
                      </ul>
                    </div>
                  ) : null}
                  <li>Knee Sleeves</li>
                  <li>Elbow Sleeves</li>
                  <li>Wrist Wraps</li>
                  <li>Knee Wraps</li>
                  <li>Straps</li>
                  <li>IPF Approved</li>
                </ul>
              </div>
            ) : null}
          </div>

          <div className="width-one">
            <div className="width-menu-div-button">
              <a href={"#0"}>ACCESSORIES</a>
              <button
                onClick={toggle4}
                className={buttonBackground4 ? "width-button" : "button-change"}
              >
                <i
                  className={
                    buttonBackground4 ? "arrow-width down-width" : "line2"
                  }
                ></i>
              </button>
            </div>
            {toggleFour ? (
              <div className="toggle-one">
                <ul>
                  <li>Chalk & Grip Tools</li>
                  <li>Smelling Salts</li>
                  <li>Resistance Bands</li>
                  <li>Mobility Tools</li>
                  <li>Clothing</li>
                  <li>Footwear</li>
                  <li>Singlets</li>
                  <li>Shakers & Jugs</li>
                  <li>Gift Cards</li>
                </ul>
              </div>
            ) : null}
          </div>

          <div className="width-one">
            <div className="width-menu-div-button">
              <a href={"#0"}>SHOP BY SPORT</a>
              <button
                onClick={toggle5}
                className={buttonBackground5 ? "width-button" : "button-change"}
              >
                <i
                  className={
                    buttonBackground5 ? "arrow-width down-width" : "line2"
                  }
                ></i>
              </button>
            </div>
            {toggleFive ? (
              <div className="toggle-one">
                <ul>
                  <li>Powerlifting</li>
                  <li>Strongman</li>
                  <li>Weightlifting</li>
                </ul>
              </div>
            ) : null}
          </div>

          <div className="width-menu-div push-down">
            <a href={"#0"}>NEW IN</a>
          </div>
          <hr className="line" />
          <div className="scale">
            <CurrencyBar2 />
          </div>
        </div>
      </div>
    </div>
  );
}
