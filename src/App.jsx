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

function App() {
  return (
    <>
      <Navigation />
      <HomePage />
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
