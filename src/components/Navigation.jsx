import { Link } from "react-router-dom";
import Icon from "@mui/material/Icon";

export default function Navigation({ setShowLogin }) {
  return (
    <ul className="navigation">
      <li>
        <Link to="/">Shop All Products</Link>
      </li>
      <li>
        <Link to="/">Clothing</Link>
      </li>
      <li>
        <Link to="/">Jewelry</Link>
      </li>
      <li>
        <Link to="/">Electronics</Link>
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
