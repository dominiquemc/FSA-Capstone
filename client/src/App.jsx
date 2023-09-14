import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AllProducts from "./components/AllProducts";
import SingleProduct from "./components/SingleProduct";
import Login from "./components/Login";
import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Electronics from "./components/Electronics";
import Men from "./components/MensClothing";
import Women from "./components/WomensClothing";
import Jewelry from "./components/Jewelry";
import Register from "./components/Register";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.findIndex((item) => item.id === product.id);

    if (existingProduct !== -1) {
      const updateCart = [...cart];
      updateCart[existingProduct].quantity += 1;
      setCart(updateCart);
    } else {
      // add product to cart {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <>
      <Navigation />
      <HomePage />
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route
          path="/products/:productId"
          element={<SingleProduct addToCart={addToCart} />}
        />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/jewelry" element={<Jewelry />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
