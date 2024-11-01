import React, { useState } from "react";
import { login } from "../services/AuthService";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // Added success state
  const navigate = useNavigate(); // Hook for redirection

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      setSuccess("Login successful! Redirecting to home...");
      setError(""); // Reset error if login succeeds
      // Redirect to home after successful login
      setTimeout(() => {
        navigate("/home"); // Redirect to home page
      }, 2000);
    } catch (err) {
      setError("Login failed. Please check your credentials.");
      setSuccess(""); // Clear success if error occurs
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-purple-200 to-indigo-300">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">Login</h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          {success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded relative" role="alert">
              <span className="block sm:inline">{success}</span>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition-colors mt-4 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
          >
            Sign In
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600">Don't have an account?
            <Link to="/register" className="text-indigo-600 hover:underline"> Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
