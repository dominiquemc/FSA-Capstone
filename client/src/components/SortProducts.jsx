import { useEffect, useState } from "react";

export default function SortProducts({ onSortChange, setProducts }) {
  const [sortMethod, setSortMethod] = useState("none");

  const handleSortChange = (method) => {
    setSortMethod(method);
    onSortChange(method);
  };

  useEffect(() => {
    const fetchSortedProducts = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products?sort=${sortMethod}`
        );
        const result = await response.json();
        setProducts(result);
        console.log(result);
      } catch (err) {
        console.log(err);
      }
    };
    if (sortMethod !== "none") {
      fetchSortedProducts();
    }
  }, [sortMethod, setProducts]);

  return (
    <div className="sortbar">
      <label>Sort by:</label>
      <select
        value={sortMethod}
        onChange={(e) => handleSortChange(e.target.value)}
      >
        <option value="ascending">Ascending (a-z)</option>
        <option value="descending">Descending (z-a)</option>
      </select>
    </div>
  );
}
