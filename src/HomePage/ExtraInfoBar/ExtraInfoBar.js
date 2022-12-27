import "/home/marv/react-projects/strength-shop/src/HomePage/ExtraInfoBar/ExtraInfoBar.css";
import van from "/home/marv/react-projects/strength-shop/src/HomePage/ExtraInfoBar/Images/delivery-van.png";
import contact from "/home/marv/react-projects/strength-shop/src/HomePage/ExtraInfoBar/Images/contact-us.png";
import returns from "/home/marv/react-projects/strength-shop/src/HomePage/ExtraInfoBar/Images/returns.png";
import gift from "/home/marv/react-projects/strength-shop/src/HomePage/ExtraInfoBar/Images/gift-card.png";

export default function ExtraInfoBar() {
  return (
    <div className="wrap">
      <div className="extra-info-bar">
        {/* delivery section */}
        <a className="delivery" href={"#0"}>
          <div>
            <img src={van} alt="delivery" />
          </div>
          <div>
            <p>
              <span>FREE SHIPPING TO UK</span>
              <br />
              <span>On Orders Over £100</span>
            </p>
          </div>
        </a>
        {/* contact us section */}
        <a className="contact-us" href={"#0"}>
          <div>
            <img src={contact} alt="contact us" />
          </div>
          <div>
            <p>
              <span>CONTACT US ANYTIME</span>
              <br />
              <span>We are athletes like you</span>
            </p>
          </div>
        </a>
        {/* returns section */}
        <a className="returns" href={"#0"}>
          <div>
            <img src={returns} alt="returns policy" />
          </div>
          <div>
            <p>
              <span>RETURN POLICY</span>
              <br />
              <span>90 Days</span>
            </p>
          </div>
        </a>
        {/* gift cards section */}
        <a className="gift-cards" href={"#0"}>
          <div>
            <img src={gift} alt="gift cards" />
          </div>
          <div>
            <p>
              <span>GIFT CARDS</span>
              <br />
              <span>
                The perfect present for
                <br />
                lifters
              </span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
