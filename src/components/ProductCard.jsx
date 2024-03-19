import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./allProducts.css";

const ProductCard = ({ product, isSingle, cart, setCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (quantity > 0) {
      const productId = product.id;
      const existingCartItemIndex = cart.findIndex(
        (item) => item.productId === productId
      );
      if (existingCartItemIndex !== -1) {
        const updatedCart = [...cart];
        updatedCart[existingCartItemIndex].quantity += quantity;
        setCart(updatedCart);
      } else {
        const newItem = { productId, quantity };
        setCart((prevCart) => [...prevCart, newItem]);
      }
    }
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  return (
    <div className="product-container">
      {isSingle && <p>{product.category}</p>}
      {isSingle && <p>{product.description}</p>}

      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </Link>

      <Link to={`/products/${product.id}`}>
        <h3 className="product-title">{product.title}</h3>
      </Link>
      <p className="product-price">${product.price}</p>
      <div className="quantity-select">
        {" "}
        <label className="qty" htmlFor="quantity">
          QTY{" "}
        </label>{" "}
        <select id="quantity" value={quantity} onChange={handleQuantityChange}>
          <option disabled>QTY</option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
      <button className="checkout-button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
