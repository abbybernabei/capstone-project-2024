import React from "react";

const CartItemCard = ({ cartItem, quantity }) => {
  return (
    <div>
      <div>
        <img src={cartItem.image} alt={cartItem.title} />
      </div>
      <div>
        <h3>{cartItem?.title}</h3>
        <p>${cartItem?.price}</p>
        <p>Qty: {quantity}</p>
      </div>
    </div>
  );
};

export default CartItemCard;
