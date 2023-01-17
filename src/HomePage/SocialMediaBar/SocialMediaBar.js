import "/home/marv/react-projects/strength-shop/src/HomePage/SocialMediaBar/social-media-bar.css";
import email from "/home/marv/react-projects/strength-shop/src/HomePage/SocialMediaBar/Images/email.png";
import facebook from "/home/marv/react-projects/strength-shop/src/HomePage/SocialMediaBar/Images/facebook.avif";
import instagram from "/home/marv/react-projects/strength-shop/src/HomePage/SocialMediaBar/Images/Instagram.avif";
import stars from "/home/marv/react-projects/strength-shop/src/HomePage/SocialMediaBar/Images/5-stars.png";

export default function SocialMediaBar() {
  return (
    <div className="social-media-wrapper">
      <div className="second-social-media-wrapper">
        <div className="news">
          <img src={email} alt="news letter" />
          <div>
            <span>NEWSLETTER SIGN UP</span>
            <p>
              Be the first to hear about <br /> new products & special <br />{" "}
              offers
            </p>
          </div>
        </div>

        <div className="facebook">
          <img src={facebook} alt="facebook" />
          <div>
            <span>FIND US ON FACEBOOK</span>
            <p>Strength Shop UK</p>
          </div>
        </div>

        <div className="instagram">
          <img src={instagram} alt="instagram" />
          <div>
            <span>
              FOLLOW US ON <br /> INSTAGRAM
            </span>
            <p>@strengthshop</p>
          </div>
        </div>

        <div className="trusted">
          <img src={stars} alt="trusted" />
          <div>
            <span>TRUSTED SINCE 2009 </span>
            <p>#strengthshop</p>
          </div>
        </div>
      </div>
    </div>
  );
}
