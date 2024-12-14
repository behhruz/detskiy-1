import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  // If authenticated, render the children (protected route content)
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
