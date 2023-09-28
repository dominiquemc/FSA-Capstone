import { useEffect } from "react";
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function Cart({ isLoggedIn }) {
  const {
    cart,
    removeFromCart,
    clearCart,
    totalPrice,
    setCart,
    cartTotal,
    setCartTotal,
  } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

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

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const handleIncreaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );

    setCart(updatedCart);
  };

  const handleDecreaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    setCart(updatedCart);
  };

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard>
              <MDBCardBody className="p-4">
                <MDBRow>
                  <MDBCol lg="7">
                    <MDBTypography tag="h5">
                      <a href="/" className="text-body">
                        <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue
                        shopping
                      </a>
                    </MDBTypography>

                    <hr />

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Shopping cart</p>
                        <p className="mb-0">{`You have ${cart.length} items in your cart`}</p>
                      </div>
                    </div>

                    {/* Display cart items */}
                    {cart.length === 0 ? (
                      <p className="empty-cart-msg">
                        Your cart is currently empty.
                      </p>
                    ) : (
                      <div>
                        <div className="cart-items">
                          {cart.map((item) => (
                            <div
                              key={item.id}
                              className="d-flex justify-content-between cart-item"
                            >
                              <img
                                src={item.image}
                                alt={item.title}
                                className="cart-item-image"
                              />
                              <div className="cart-item-details">
                                <p className="cart-item-title">{item.title}</p>
                                <div className="cart-item-quantity">
                                  Quantity:{" "}
                                  <button
                                    onClick={() =>
                                      handleDecreaseQuantity(item.id)
                                    }
                                  >
                                    -
                                  </button>
                                  {item.quantity}
                                  <button
                                    onClick={() =>
                                      handleIncreaseQuantity(item.id)
                                    }
                                  >
                                    +
                                  </button>
                                </div>
                                <p className="cart-item-price">
                                  Price: ${item.price * item.quantity}
                                </p>
                              </div>
                              <button
                                onClick={() => handleRemoveItem(item.id)}
                                className="remove-item-btn"
                              >
                                Remove
                              </button>
                            </div>
                          ))}
                        </div>
                        <p className="cart-total">
                          Total: ${totalPrice.toFixed(2)}
                        </p>
                        <button
                          onClick={handleClearCart}
                          className="btn btn-warning"
                        >
                          Clear Cart
                        </button>
                      </div>
                    )}
                  </MDBCol>

                  <MDBCol lg="5">
                    <MDBCard className="bg-primary text-white rounded-3">
                      <MDBCardBody>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <MDBTypography tag="h5" className="mb-0">
                            Card details
                          </MDBTypography>
                        </div>

                        <p className="small">Card type</p>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-visa fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-amex fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                        </a>

                        <form className="mt-4">
                          <MDBInput
                            className="mb-4"
                            label="Cardholder's Name"
                            name="cardholderName"
                            type="text"
                            size="lg"
                            placeholder="Cardholder's Name"
                            contrast
                            required
                          />

                          <MDBInput
                            className="mb-4"
                            label="Card Number"
                            name="cardNumber"
                            type="text"
                            size="lg"
                            minLength="19"
                            maxLength="19"
                            placeholder="1234 5678 9012 3457"
                            contrast
                            required
                          />

                          <MDBRow className="mb-4">
                            <MDBCol md="6">
                              <MDBInput
                                className="mb-4"
                                label="Expiration"
                                name="expiration"
                                type="text"
                                size="lg"
                                minLength="7"
                                maxLength="7"
                                placeholder="MM/YYYY"
                                contrast
                                required
                              />
                            </MDBCol>
                            <MDBCol md="6">
                              <MDBInput
                                className="mb-4"
                                label="Cvv"
                                name="cvv"
                                type="text"
                                size="lg"
                                minLength="3"
                                maxLength="3"
                                placeholder="&#9679;&#9679;&#9679;"
                                contrast
                                required
                              />
                            </MDBCol>
                          </MDBRow>
                        </form>

                        <hr />

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">${totalPrice.toFixed(2)}</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2">$0</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Total(Incl. taxes)</p>
                          <p className="mb-2">${cartTotal.toFixed(2)}</p>
                        </div>

                        <MDBBtn color="info" block size="lg">
                          <div className="d-flex justify-content-center">
                            <span onClick={handleCheckout}>
                              Checkout
                              <i className="fas fa-long-arrow-alt-right ms-2"></i>
                            </span>
                          </div>
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
