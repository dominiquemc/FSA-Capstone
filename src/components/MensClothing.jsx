import { useEffect, useState } from "react";

export default function Men() {
  const [mensProducts, setMensProducts] = useState([]);

  useEffect(() => {
    const fetchClothingProducts = async () => {
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
    fetchClothingProducts();
  }, []);

  return (
    <div>
      <h1>Men's Clothing</h1>
      <ul className="products">
        {mensProducts.map((product) => (
          <main key={product.id} className="allProducts">
            <li>{product.title}</li>
          </main>
        ))}
      </ul>
    </div>
  );
}
