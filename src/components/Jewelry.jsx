import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Jewelry() {
  const [jewelryProducts, setJewelryProducts] = useState([]);

  useEffect(() => {
    const fetchJewelryProducts = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/category/jewelery"
        );
        const result = await response.json();
        setJewelryProducts(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchJewelryProducts();
  }, []);

  return (
    <div>
      <h1>Jewelry</h1>
      <ul className="products">
        {jewelryProducts.map((product) => (
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
          </main>
        ))}
      </ul>
    </div>
  );
}
