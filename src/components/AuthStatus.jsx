// src/components/AuthStatus.js
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthStatus = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

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
    <div className="w-full flex flex-col md:flex-row items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md mt-4">
      {user ? (
        <>
          <p className="text-lg text-gray-700 font-semibold mb-2 md:mb-0">
            Welcome, {user.email}
          </p>
          <button
            onClick={handleLogout}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 transition duration-300"
          >
            Logout
          </button>
        </>
      ) : (
        <p className="text-gray-500 text-center w-full">No user logged in</p>
      )}
    </div>
  );
};

export default AuthStatus;
