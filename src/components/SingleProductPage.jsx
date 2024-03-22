import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../api/index";
import "./single.css";
import ProductCard from "./ProductCard";

const SingleProductPage = ({ cart, setCart }) => {
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

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <ProductCard product={product} isSingle setCart={setCart} cart={cart} />
    </>
  );
};

export default SingleProductPage;
