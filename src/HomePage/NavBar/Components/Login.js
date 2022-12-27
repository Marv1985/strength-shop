import user from "/home/marv/react-projects/strength-shop/src/HomePage/NavBar/Images/user-profile.png";
import "/home/marv/react-projects/strength-shop/src/HomePage/NavBar/NavbarCss/Login.css";

export default function Login() {
  return (
    <div className="login">
      <a href={"#0"}>
        <img className="user-image" src={user} alt="user" />
        <span>LOGIN</span>
      </a>
    </div>
  );
}
