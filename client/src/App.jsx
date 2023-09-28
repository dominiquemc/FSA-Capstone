import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import AllProducts from "./components/AllProducts";
import HomePage from "./components/HomePage";
import SingleProduct from "./components/SingleProduct";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Electronics from "./components/Electronics";
import Men from "./components/MensClothing";
import Women from "./components/WomensClothing";
import Jewelry from "./components/Jewelry";
import Register from "./components/Register";
import Cart from "./components/Cart";
import Login from "./components/Login";
import { CartProvider } from "./CartContext";
import Checkout from "./components/Checkout";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("default");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(initialCart);
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    if (category === "electronics") {
      navigate("/electronics");
    } else if (category === "jewelry") {
      navigate("/jewelry");
    } else if (category === "men's clothing") {
      navigate("/men");
    } else if (category === "women's clothing") {
      navigate("/women");
    } else {
      navigate("/");
    }
  };

  const addToCart = (product) => {
    // Add product to cart / maintain cart
    const updatedCart = [...cart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Login function
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <CartProvider>
      <div>
        <Navigation
          setSelectedCategory={handleCategoryClick}
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
          cartItemCount={cart.length}
        />
        <HomePage />
        <Routes>
          <Route
            path="/"
            element={
              <AllProducts
                addToCart={addToCart}
                cart={cart}
                category={selectedCategory}
              />
            }
          />
          <Route
            path="/products/:productId"
            element={<SingleProduct addToCart={addToCart} />}
          />
          <Route
            path="/electronics"
            element={
              <Electronics
                addToCart={addToCart}
                cart={cart}
                category="electronics"
              />
            }
          />
          <Route
            path="/jewelry"
            element={
              <Jewelry addToCart={addToCart} cart={cart} category="jewelery" />
            }
          />
          <Route
            path="/men"
            element={
              <Men
                addToCart={addToCart}
                cart={cart}
                category="men's clothing"
              />
            }
          />
          <Route
            path="/women"
            element={
              <Women
                addToCart={addToCart}
                cart={cart}
                category="women's clothing"
              />
            }
          />
          <Route
            path="/register"
            element={<Register onLogin={handleLogin} />}
          />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/cart" element={<Cart isLoggedIn={isLoggedIn} />} />
          <Route
            path="/checkout"
            element={<Checkout isLoggedIn={isLoggedIn} />}
          />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
}
