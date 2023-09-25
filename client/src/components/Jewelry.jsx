import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";

export default function Jewelry({ category, cart }) {
  const [jewelryProducts, setJewelryProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchJewelryProducts = async () => {
      try {
        console.log("Fetching Jewelry products");
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${category}`
        );
        const result = await response.json();
        setJewelryProducts(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchJewelryProducts();
  }, [category]);

  return (
    <div className="allProducts-list">
      <h1 className="category-title">Jewelry</h1>
      <ul className="products">
        {jewelryProducts.map((product) => (
          <main key={product.id} className="allProducts">
            <Link to={`/products/${product.id}`} className="product-link">
              <img
                src={product.image}
                className="productImages"
                alt="Product for sale"
              />
              <li className="product-title">{product.title}</li>
            </Link>
            <li className="product-rating">
              {product.rating.rate} stars ({product.rating.count} reviews)
            </li>
            <li className="product-price">${product.price}</li>
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
