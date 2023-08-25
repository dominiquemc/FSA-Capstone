import { useEffect, useState } from "react";

export default function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        setProducts(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}
