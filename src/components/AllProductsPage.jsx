import React from "react";
import ProductCard from "./ProductCard";
import "./allProducts.css";

const AllProductsPage = ({ products }) => {
  return (
    <div className="the-products">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default AllProductsPage;
