import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Jewelry({ category, addToCart, cart }) {
  const [jewelryProducts, setJewelryProducts] = useState([]);

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

  // add a jewelry product to cart
  const handleAddToCart = (product) => {
    addToCart(product);
  };

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
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </main>
        ))}
      </ul>
    </div>
  );
}
