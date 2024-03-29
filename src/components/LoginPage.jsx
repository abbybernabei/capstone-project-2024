import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, fetchAllUsers, fetchUserCart } from "../api/index";
import "./login.css";

const LoginPage = ({ setToken, setUser, setCart }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = await login(username, password);
    setToken(token);

    const user = await fetchAllUsers(username);
    const usersCart = await fetchUserCart(user.id);
    // console.log("user--->", username, "usersCart--->", usersCart);

    setUsername("");
    setPassword("");
    setUser(user);
    setCart(usersCart);
    navigate("/");
  };

  return (
    <div className="body">
      <div className="container-log">
        <h2 className="heading">Login</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="column">
            <div className="input-box">
              <label htmlFor="username">
                Username:
                <input
                  name="username"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
            </div>
            <div className="input-box">
              <label htmlFor="password">
                Password:
                <input
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
          </div>
          <button>Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
