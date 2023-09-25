import { Link, useNavigate } from "react-router-dom";
import Icon from "@mui/material/Icon";

export default function Navigation({
  isLoggedIn,
  setIsLoggedIn,
  totalQuantity,
  setSelectedCategory,
}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    console.log("Selected Category:", category);
  };

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
        <Link
          to="/electronics"
          onClick={() => handleCategoryClick("electronics")}
        >
          Electronics
        </Link>
      </li>

      {!isLoggedIn && (
        <>
          <li>
            <div className="signInContainer">
              <Icon>app_registration</Icon>
              <Link to="/register">Register</Link>
            </div>
          </li>

          <li>
            <div className="signInContainer">
              <Icon>person</Icon>
              <Link to="/login">Login</Link>
            </div>
          </li>
        </>
      )}

      {isLoggedIn && (
        <li>
          <div className="signInContainer">
            <Icon>shopping_cart</Icon>
            <Link to="/cart">
              Cart
              {totalQuantity > 0 && (
                <span className="cart-quantity">{totalQuantity}</span>
              )}
            </Link>
          </div>
        </li>
      )}

      {isLoggedIn && (
        <li>
          <div className="signInContainer">
            <Icon>person</Icon>
            <Link to="/login" onClick={handleLogout}>
              Logout
            </Link>
          </div>
        </li>
      )}
    </ul>
  );
}
