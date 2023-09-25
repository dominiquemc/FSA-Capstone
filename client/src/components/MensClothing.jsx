import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Men({ category, addToCart, cart }) {
  const [mensClothingProducts, setMensClothingProducts] = useState([]);

  useEffect(() => {
    const fetchMensClothingProducts = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${category}`
        );
        const result = await response.json();
        setMensClothingProducts(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMensClothingProducts();
  }, [category]);

  // add men's item to cart
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="allProducts-list">
      <h1 className="category-title">Men's Clothing</h1>
      <ul className="products">
        {mensClothingProducts.map((product) => (
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
