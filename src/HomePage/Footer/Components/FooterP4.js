import "/home/marv/react-projects/strength-shop/src/HomePage/Footer/Footer-Css/footer-4.css";

export default function FooterP4() {
  return (
    <div className="footer-p4-wrapper">
      <h2>JOIN OUR NEWS LETTER</h2>

      <div className="subscribe">
        <input className="in" type="email" placeholder="Enter email here" />
        <div>
          <input type="checkbox" />
          <p>I agree to subscribe to updates from Strength Shop</p>
        </div>
        <button>Subscribe</button>
      </div>
    </div>
  );
}
