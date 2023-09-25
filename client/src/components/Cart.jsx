import { useEffect, useState } from "react";
import { useCart } from "../CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setCartTotal(total);
  }, [cart]);

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart-msg">Your cart is currently empty.</p>
      ) : (
        <div>
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-details">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="cart-item-image"
                  />
                  <p className="cart-item-title">{item.title}</p>
                  <p className="cart-item-quantity">
                    Quantity: {item.quantity}
                  </p>
                  <p className="cart-item-price">
                    Price: ${item.price * item.quantity}
                  </p>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="remove-item-btn"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p className="cart-total">Total: ${cartTotal}</p>
          <button onClick={handleClearCart} className="clear-cart-btn">
            Clear Cart
          </button>
          <button>Checkout</button>
        </div>
      )}
    </div>
  );
}
