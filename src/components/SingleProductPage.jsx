import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../api/index";
import "./single.css";

const SingleProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const productData = await fetchSingleProduct(productId);
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product", error);
      }
    };
    getProduct();
  }, [productId]);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  return (
    <>
      <div className="container-page">
        {product && (
          <div className="single-details">
            <div className="single-image-container">
              <img
                className="single-image"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="single-info">
              <h2 className="single-title">{product.title}</h2>
              <p className="single-category">{product.category}</p>
              <p className="single-price">${product.price}</p>
              <p className="single-description">{product.description}</p>
              <div className="quantity-select">
                <label className="qty" htmlFor="quantity">
                  QTY
                </label>
                <select
                  id="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                >
                  <option disabled>QTY</option>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SingleProductPage;
