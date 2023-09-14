import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Men() {
  const [mensProducts, setMensProducts] = useState([]);

  useEffect(() => {
    const fetchMenProducts = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/category/men's clothing"
        );
        const result = await response.json();
        setMensProducts(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMenProducts();
  }, []);

  return (
    <div className="allProducts-list">
      <h1>Men's Clothing</h1>
      <ul className="products">
        {mensProducts.map((product) => (
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
