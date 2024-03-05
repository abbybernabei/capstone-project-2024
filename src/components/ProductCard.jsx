import React from "react";
import { Link } from "react-router-dom";
import "./allProducts.css";

const ProductCard = ({ product, isSingleProduct }) => {
  return (
    <div className="product-container">
      <p className="invisible">{product.category}</p>
      <p className="invisible">{product.description}</p>
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
    </div>
  );
};

export default ProductCard;
