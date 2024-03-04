import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { fetchAllProducts } from "../api";
import "./allProducts.css";

const AllProductsPage = ({ products }) => {
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    setSortedProducts(products);
  }, [products]);

  const sortProducts = (order) => {
    let sorted = [...products];
    if (order === "lowToHigh") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (order === "highToLow") {
      sorted.sort((a, b) => b.price - a.price);
    }
    setSortedProducts(sorted);
  };

  return (
    <div className="the-products">
      <div className="sort-dropdown">
        <select
          id="sort"
          onChange={(e) => sortProducts(e.target.value)}
          defaultValue=""
        >
          <option value="" disabled>
            Sort by:
          </option>
          <option value="lowToHigh">Price: low to high</option>
          <option value="highToLow">Price: high to low</option>
        </select>
      </div>

      {sortedProducts.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default AllProductsPage;
