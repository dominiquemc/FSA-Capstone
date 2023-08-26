import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <ul className="navigation">
      <li>
        <Link to="/products">Shop All Products</Link>
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
        <Link to="/">Books</Link>
      </li>
    </ul>
  );
}
