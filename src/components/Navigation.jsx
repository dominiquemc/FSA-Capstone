import { Link } from "react-router-dom";
import Icon from "@mui/material/Icon";

export default function Navigation({ setShowLogin }) {
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

      <li>
        <div className="signInContainer">
          <Icon>person</Icon>
          <Link to="/login" onClick={() => setShowLogin(true)}>
            Sign In
          </Link>
        </div>
      </li>
    </ul>
  );
}
