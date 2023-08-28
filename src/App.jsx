import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AllProducts from "./components/AllProducts";
import SingleProduct from "./components/SingleProduct";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<AllProducts />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
