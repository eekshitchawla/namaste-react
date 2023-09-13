import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [toggle, setToggle] = useState("Login");
  const status = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="alt" />
      </div>

      <div className="nav-items">
        <ul>
          <li>{status ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            onClick={() => {
              toggle === "Login" ? setToggle("Logout") : setToggle("Login");
            }}
          >
            {toggle}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
