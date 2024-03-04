import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AllProductsPage from "./components/AllProductsPage";
import { fetchAllProducts } from "./api";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const productsData = await fetchAllProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
    getAllProducts();
  }, []);

  return (
    <>
      <div>
        <Routes>
          <Route
            path="/products"
            element={
              <AllProductsPage products={products} setProducts={setProducts} />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
