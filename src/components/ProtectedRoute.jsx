import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false); 
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    // Display a loading message while authentication state is being determined
    return <div></div>;
  }

  if (!user) {
    // If user is not authenticated, redirect to login
    return <Navigate to="/" replace />;
  }

  // If authenticated, render the protected component
  return children;
};

export default ProtectedRoute;
