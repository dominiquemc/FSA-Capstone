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
    <div className="allProducts">
      <h1>All Products</h1>
      <ul className="products">
        {products.map((product) => (
          <main key={product.id} className="allProducts">
            <img
              src={product.image}
              className="productImages"
              alt="Product for sale"
            />
            <li>{product.title}</li>
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
