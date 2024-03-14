import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./allProducts.css";

const AllProductsPage = ({ products, cart, setCart }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");
  const [selectedSortOrder, setSelectedSortOrder] = useState("");

  useEffect(() => {
    filterProducts();
  }, [products, selectedCategory, selectedPriceRange]);

  const filterProducts = () => {
    let filtered = [...products];

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (selectedPriceRange !== "All") {
      filtered = filtered.filter((product) =>
        filterByPriceRange(product.price)
      );
    }

    setFilteredProducts(filtered);
  };

  const filterByPriceRange = (price) => {
    switch (selectedPriceRange) {
      case "under25":
        return price < 25;
      case "25to50":
        return price >= 25 && price <= 50;
      case "50to100":
        return price > 50 && price <= 100;
      case "over100":
        return price > 100;
      default:
        return true;
    }
  };

  const handleSortChange = (order) => {
    setSelectedSortOrder(order);
  };

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (selectedSortOrder === "lowToHigh") {
      return a.price - b.price;
    } else if (selectedSortOrder === "highToLow") {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  return (
    <div className="container">
      <div className="filter-bar">
        <div className="sort-dropdown">
          <label htmlFor="sort">Sort by:</label>
          <select
            id="sort"
            onChange={(e) => handleSortChange(e.target.value)}
            defaultValue=""
          >
            <option value="" disabled hidden></option>
            <option value="lowToHigh">Price: low to high</option>
            <option value="highToLow">Price: high to low</option>
          </select>
        </div>
        <div className="filter-dropdown">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            onChange={(e) => setSelectedCategory(e.target.value)}
            defaultValue="All"
          >
            <option value="All">All</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
          <label htmlFor="priceRange">Price Range:</label>
          <select
            id="priceRange"
            onChange={(e) => setSelectedPriceRange(e.target.value)}
            defaultValue="All"
          >
            <option value="All">All</option>
            <option value="under25">Under $25</option>
            <option value="25to50">$25 - $50</option>
            <option value="50to100">$50 - $100</option>
            <option value="over100">Over $100</option>
          </select>
        </div>
      </div>
      <div className="content">
        {sortedProducts.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              cart={cart}
              setCart={setCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllProductsPage;
