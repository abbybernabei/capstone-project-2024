import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AllProductsPage from "./components/AllProductsPage";
import SingleProductPage from "./components/SingleProductPage";
import { fetchAllProducts } from "./api/index";
import AuthenticatedNavbar from "./components/AuthenticatedNavbar";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";

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
          <Route path="/products/:productId" element={<SingleProductPage />} />
          <Route
            path="/auth/login"
            element={<LoginPage setToken={setToken} />}
          />
          <Route path="/users" element={<RegistrationPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
