import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../api/index";
import "./single.css";

const SingleProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

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
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SingleProductPage;
