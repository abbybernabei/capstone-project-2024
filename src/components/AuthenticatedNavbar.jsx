import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const AuthenticatedNavbar = ({ token, setToken }) => {
  const navigate = useNavigate();
  const handleLoggoutClick = () => {
    setToken(null);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="home-link">
          Home
        </Link>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          {token ? (
            <>
              <Link to="/carts" className="link">
                Cart
              </Link>
              <Link to="/" className="link">
                <button onClick={handleLoggoutClick} className="logout-btn">
                  Log Out
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/users" className="link">
                Register
              </Link>
              <Link to="/login" className="link">
                Login
              </Link>
            </>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default AuthenticatedNavbar;
