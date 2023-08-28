import { useEffect, useState } from "react";

export default function SortProducts() {
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    const fetchSortedProducts = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products?sort=${sortedProducts}`
        );
        const result = await response.json();
        setSortedProducts(result);
        console.log(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSortedProducts();
  }, []);

  return <div className="sortBar"></div>;
}
