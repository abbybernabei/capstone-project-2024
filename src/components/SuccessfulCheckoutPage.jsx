import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessfulCheckoutPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>Your checkout was successful!</h2>
      <button onClick={handleGoBack}>Back to Home</button>
    </div>
  );
};

export default SuccessfulCheckoutPage;
