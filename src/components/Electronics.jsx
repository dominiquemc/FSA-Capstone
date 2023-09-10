import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Electronics() {
  const [electronicProducts, setElectronicProducts] = useState([]);

  useEffect(() => {
    const fetchElectronicProducts = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/category/electronics"
        );
        const result = await response.json();
        setElectronicProducts(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchElectronicProducts();
  }, []);

  return (
    <div>
      <h1>Electronics</h1>
      <ul className="products">
        {electronicProducts.map((product) => (
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
