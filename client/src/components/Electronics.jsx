import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Electronics({ category, addToCart, cart }) {
  const [electronicProducts, setElectronicProducts] = useState([]);

  useEffect(() => {
    const fetchElectronicProducts = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${category}`
        );
        const result = await response.json();
        setElectronicProducts(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchElectronicProducts();
  }, [category]);

  // add electronic to cart
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="allProducts-list">
      <h1 className="category-title">Electronics</h1>
      <p>Current Category: {category}</p>
      <ul className="products">
        {electronicProducts.map((product) => (
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
