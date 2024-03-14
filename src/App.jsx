import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AllProductsPage from "./components/AllProductsPage";
import SingleProductPage from "./components/SingleProductPage";
import { fetchAllProducts } from "./api/index";
import AuthenticatedNavbar from "./components/AuthenticatedNavbar";
import LoginPage from "./components/LoginPage";
import CartPage from "./components/CartPage";

function App() {
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token" || null));
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      const userObj = JSON.stringify(user);
      localStorage.setItem("user", userObj);
      const cartArr = JSON.stringify(cart);
      localStorage.setItem("cart", cartArr);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("cart");
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
              <AllProductsPage
                products={products}
                setProducts={setProducts}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route
            path="/products/:productId"
            element={<SingleProductPage cart={cart} setCart={setCart} />}
          />
          <Route
            path="/login"
            element={
              <LoginPage
                setToken={setToken}
                setUser={setUser}
                setCart={setCart}
              />
            }
          />

          <Route
            path="/cart"
            element={
              <CartPage cart={cart} products={products} setCart={setCart} />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
