// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase"; // Assuming you've initialized Firebase auth here

const ProtectedRoute = ({ children }) => {
  const user = auth.currentUser; // Check if the user is authenticated

  if (!user) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/" replace />;
  }

  // If authenticated, render the children (the protected component)
  return children;
};

export default ProtectedRoute;
