import Navigation from "./Navigation";
import AllProducts from "./AllProducts";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <div className="home">
        <img
          src="./src/assets/banner.png"
          className="siteBanner"
          alt="Shop Direct Banner"
        />
      </div>
      <AllProducts />
    </>
  );
}
