import React from "react";
import CartItemCard from "./CartItemCard";
import "./CartPage.css";

const CartPage = ({ cart, products, setCart }) => {
  const getAllItemDetails = (cartItem) =>
    products.find((product) => product.id === cartItem.productId);

  return (
    <div className="cart-container">
      <h1 className="cart-title">My Cart</h1>
      {cart.map((item) => {
        const productItem = getAllItemDetails(item);
        return (
          <div className="cart-item" key={item.productId}>
            <CartItemCard cartItem={productItem} quantity={item.quantity} />
          </div>
        );
      })}
    </div>
  );
};

export default CartPage;
