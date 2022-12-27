import "/home/marv/react-projects/strength-shop/src/HomePage/NavBar/NavbarCss/WidthMenu.css";
import user from "/home/marv/react-projects/strength-shop/src/HomePage/NavBar/Images/user-2.png";
export default function WidthMenu(props) {
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

          <div className="width-menu-div-button">
            <a href={"#0"}>WEIGHTS & BARS</a>
            <button className="width-button">
              <i className="arrow-width down-width"></i>
            </button>
          </div>
          <div className="width-menu-div-button">
            <a href={"#0"}>EQUIPMENT</a>
            <button className="width-button">
              <i className="arrow-width down-width"></i>
            </button>
          </div>
          <div className="width-menu-div-button">
            <a href={"#0"}>SUPPORT GEAR</a>
            <button className="width-button">
              <i className="arrow-width down-width"></i>
            </button>
          </div>
          <div className="width-menu-div-button">
            <a href={"#0"}>ACCESSORIES</a>
            <button className="width-button">
              <i className="arrow-width down-width"></i>
            </button>
          </div>
          <div className="width-menu-div-button">
            <a href={"#0"}>SHOP BY SPORT</a>
            <button className="width-button">
              <i className="arrow-width down-width"></i>
            </button>
          </div>

          <div className="width-menu-div">
            <a href={"#0"}>NEW IN</a>
          </div>
        </div>
      </div>
    </div>
  );
}
