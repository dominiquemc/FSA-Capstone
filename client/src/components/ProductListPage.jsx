import { useState, useEffect, useContext } from "react";
import SortProducts from "./SortProducts";
import Searchbar from "./Searchbar";
import AllProducts from "./AllProducts";
import { CartContext } from "../CartContext";

export default function ProductListPage({ category }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${category}`
        );
        const result = await response.json();
        setProducts(result);
        setFilteredProducts(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, [category]);

  return (
    <div className="allProducts-list">
      <div className="sort-search">
        <SortProducts
          onSortChange={handleSortChange}
          setProducts={setFilteredProducts}
        />
        <Searchbar filterProducts={filterProducts} />
      </div>
      <AllProducts products={filteredProducts} addToCart={addToCart} />
    </div>
  );
}
