import React from "react";
import CartItemCard from "./CartItemCard";

const CartPage = ({ cart, products, setCart }) => {
  const getAllItemDetails = (cartItem) =>
    products.find((product) => product.id === cartItem.productId);

  return (
    <div>
      <h1>My Cart</h1>
      {cart.map((item) => {
        const productItem = getAllItemDetails(item);
        return (
          <CartItemCard
            key={productItem?.id}
            cartItem={productItem}
            quantity={item.quantity}
          />
        );
      })}
    </div>
  );
};

export default CartPage;
