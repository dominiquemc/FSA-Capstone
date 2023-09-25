export default function SortProducts({ onSortChange }) {
  const handleSortChange = (method) => {
    onSortChange(method);
  };

  return (
    <div className="sortbar">
      <label>Sort by:</label>
      <select
        defaultValue="none"
        onChange={(e) => handleSortChange(e.target.value)}
      >
        <option value="ascending">Ascending (A-Z)</option>
        <option value="descending">Descending (Z-A)</option>
      </select>
    </div>
  );
}
