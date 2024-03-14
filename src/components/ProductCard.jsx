import React from "react";
import { Link } from "react-router-dom";
import "./allProducts.css";

const ProductCard = ({ product, isSingle, cart, setCart }) => {
  const handleAddToCart = () => {
    const productId = product.id;
    const existingCartItemIndex = cart.findIndex(
      (item) => item.productId === productId
    );
    if (existingCartItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingCartItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      const newItem = { productId, quantity: 1 };
      setCart((prevCart) => [...prevCart, newItem]);
    }
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
      <button className="checkout-button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
