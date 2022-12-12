import cart from "/home/marv/react-projects/strength-shop/src/HomePage/NavBar/Images/shopping-cart.png";
import "/home/marv/react-projects/strength-shop/src/HomePage/NavBar/NavbarCss/Cart.css";

export default function Cart() {
  return (
    <div className="cart">
      <a href={"cart"}>
        <img className="cart-image" src={cart} alt="cart" />
      </a>
    </div>
  );
}
