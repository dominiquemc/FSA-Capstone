import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // update quantity if product is already in cart
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // add product if it doesn't exist
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);

    // Update local storage to reflect removed item
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCart([]);

    // Clear out user local storage
    localStorage.removeItem("cart");
  };

  // Cart persistence - local storage for persistant cart info
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const totalQuantity = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        totalQuantity,
        totalPrice,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
