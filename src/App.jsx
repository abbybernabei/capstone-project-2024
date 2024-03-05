import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AllProductsPage from "./components/AllProductsPage";
import { fetchAllProducts } from "./api";
import AuthenticatedNavbar from "./components/AuthenticatedNavbar";
import LoginPage from "./components/LoginPage";

function App() {
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

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
      <AuthenticatedNavbar token={token} setToken={setToken} />
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <AllProductsPage products={products} setProducts={setProducts} />
            }
          />
          <Route
            path="/auth/login"
            element={<LoginPage setToken={setToken} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
