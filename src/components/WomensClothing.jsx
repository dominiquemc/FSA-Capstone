import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Women() {
  const [womensProducts, setWomensProducts] = useState([]);

  useEffect(() => {
    const fetchWomenProducts = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/category/women's clothing"
        );
        const result = await response.json();
        setWomensProducts(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchWomenProducts();
  }, []);

  return (
    <div>
      <h1>Women's Clothing</h1>
      <ul className="products">
        {womensProducts.map((product) => (
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
