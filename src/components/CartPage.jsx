import React from "react";
import { useNavigate } from "react-router-dom";
import CartItemCard from "./CartItemCard";
import "./CartPage.css";

const CartPage = ({ cart, products, setCart }) => {
  const getAllItemDetails = (cartItem) =>
    products.find((product) => product.id === cartItem.productId);

  const navigate = useNavigate();

  const handleRemoveItem = (productId) => {
    const updatedCart = cart.filter((item) => item.productId !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const handleQuantityChange = (e, productId) => {
    const updatedCart = cart.map((item) => {
      if (item.productId === productId) {
        return {
          ...item,
          quantity: parseInt(e.target.value),
        };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">My Cart</h1>
      {cart.map((item) => {
        const productItem = getAllItemDetails(item);
        return (
          <div className="cart-item" key={item.productId}>
            <CartItemCard cartItem={productItem} quantity={item.quantity} />
            <div className="item-controls">
              <label className="qty" htmlFor="quantity">
                Edit Qty:
              </label>
              <select
                value={item.quantity}
                onChange={(e) => handleQuantityChange(e, item.productId)}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
              <button
                className="remove-button"
                onClick={() => handleRemoveItem(item.productId)}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
      <div>
        <button onClick={handleCheckout} className="checkout-button">
          {" "}
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
