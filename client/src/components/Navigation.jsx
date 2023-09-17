import { Link } from "react-router-dom";
import Icon from "@mui/material/Icon";

export default function Navigation({ isLoggedIn }) {
  return (
    <ul className="navigation">
      <li>
        <Link to="/">Shop All Products</Link>
      </li>
      <li>
        <Link to="/women">Women</Link>
      </li>
      <li>
        <Link to="/men">Men</Link>
      </li>
      <li>
        <Link to="/jewelry">Jewelry</Link>
      </li>
      <li>
        <Link to="/electronics">Electronics</Link>
      </li>

      {!isLoggedIn ? (
        <div className="grouped">
          <li>
            <div className="signInContainer">
              <Icon>app_registration</Icon>
              <Link to="/register">Register</Link>
            </div>
          </li>
          <>
            <li>
              <div className="signInContainer">
                <Icon>person</Icon>
                <Link to="/login">Login</Link>
              </div>
            </li>
          </>
        </div>
      ) : (
        <li>
          <Link to="/">Logout</Link>
        </li>
      )}

      <li>
        <div className="signInContainer">
          <Icon>shopping_cart</Icon>
          <Link to="/cart">Cart</Link>
        </div>
      </li>
    </ul>
  );
}
