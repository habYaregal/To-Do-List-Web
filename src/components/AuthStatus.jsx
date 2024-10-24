// src/components/AuthStatus.js
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AuthStatus = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/"); // Redirect to login page after successful logout
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.email}</p>
          <button onClick={handleLogout} className="text-red-500">Logout</button>
        </div>
      ) : (
        <p>No user logged in</p>
      )}
    </div>
  );
};

export default AuthStatus;
