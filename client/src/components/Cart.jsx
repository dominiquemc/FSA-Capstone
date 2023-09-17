export default function Cart({ cart }) {
  return (
    <div>
      <h2>ShoppingCart</h2>;
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
