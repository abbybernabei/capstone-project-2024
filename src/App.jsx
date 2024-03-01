import React from "react";
import AuthenticatedNavbar from "./components/AuthenticatedNavbar";

function App() {
  return (
    <>
      <AuthenticatedNavbar /* token={token} setToken={setToken} */ />
      <div></div>
    </>
  );
}

export default App;
