import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Searchbar({ filterProducts }) {
  const [query, setQuery] = useState("");

  const handleChange = (value) => {
    setQuery(value);
    filterProducts(value);
  };
  return (
    <div className="inputWrapper">
      <FaSearch id="search" />
      <input
        type="text"
        name="searchbar"
        id="searchbar"
        placeholder="Search for a product..."
        value={query}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}
