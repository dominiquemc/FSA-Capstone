import Navigation from "./Navigation";
import AllProducts from "./AllProducts";
import Login from "./Login";
import { useState } from "react";

export default function HomePage() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className="home-container">
      <img
        src="./src/assets/banner.png"
        className="siteBanner"
        alt="Shop Direct Banner"
      />

      <div className="home">{showLogin ? <Login /> : <AllProducts />}</div>
    </div>
  );
}
