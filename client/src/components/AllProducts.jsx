import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SortProducts from "./SortProducts";
import Searchbar from "./Searchbar";
import { useCart } from "../CartContext";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        setProducts(result);
        setFilteredProducts(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);

  const handleSortChange = (method) => {
    const sorted = [...filteredProducts];
    if (method === "ascending") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (method === "descending") {
      sorted.sort((a, b) => b.title.localeCompare(a.title));
    }
    setFilteredProducts(sorted);
  };

  const filterProducts = (query) => {
    if (query.trim() === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="allProducts-list">
      <div className="sort-search">
        <SortProducts onSortChange={handleSortChange} />
        <Searchbar filterProducts={filterProducts} />
      </div>
      <ul className="products">
        {filteredProducts.map((product) => (
          <main key={product.id} className="allProducts">
            <Link to={`/products/${product.id}`}>
              <img
                src={product.image}
                className="productImages"
                alt="Product for sale"
              />
              <li>{product.title}</li>
            </Link>
            <li>
              {product.rating.rate} stars {product.rating.count} reviews
            </li>
            <li>${product.price}</li>

            <button
              className="add-btn-main add"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </main>
        ))}
      </ul>
    </div>
  );
}
