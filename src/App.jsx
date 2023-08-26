import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AllProducts from "./components/AllProducts";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<AllProducts />} />
      </Routes>
    </>
  );
}

export default App;
