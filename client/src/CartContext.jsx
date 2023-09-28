import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // update quantity if product is already in cart
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);

      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      // add product if it doesn't exist
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);

      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    const newCartTotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setCartTotal(newCartTotal);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);

    // Update local storage to reflect removed item
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    const newCartTotal = updatedCart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setCartTotal(newCartTotal);
  };

  const clearCart = () => {
    setCart([]);

    // Clear out user local storage
    localStorage.removeItem("cart");
    setCartTotal(0);
  };

  // Cart persistence - local storage for persistant cart info
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);

    const initialCartTotal = storedCart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setCartTotal(initialCartTotal);
  }, []);

  const totalQuantity = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        cartTotal,
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
