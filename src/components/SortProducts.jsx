import { useEffect, useState } from "react";

export default function SortProducts({ setSortedProducts }) {
  const [sortMethod, setSortMethod] = useState("none");

  const sortMethods = {
    none: { method: (a, b) => 0 },
    ascending: { method: (a, b) => a.localeCompare(b) },
    descending: { method: (a, b) => b.localeCompare(a) },
  };

  useEffect(() => {
    const fetchSortedProducts = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products?sort=${sortMethod}`
        );
        const result = await response.json();
        setSortedProducts(result);
        console.log(result);
      } catch (err) {
        console.log(err);
      }
    };
    if (sortMethod !== "none") {
      fetchSortedProducts();
    }
  }, [sortMethod, setSortedProducts]);

  return (
    <div className="sortbar">
      <label>Sort by:</label>
      <select
        value={sortMethod}
        onChange={(e) => setSortMethod(e.target.value)}
      >
        <option value="asc">Ascending (a-z)</option>
        <option value="desc">Descending (z-a)</option>
      </select>
    </div>
  );
}
