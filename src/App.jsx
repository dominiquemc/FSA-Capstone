import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AllProducts from "./components/AllProducts";
import SingleProduct from "./components/SingleProduct";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:productId" component={<SingleProduct />} />
      </Routes>
    </>
  );
}

export default App;
