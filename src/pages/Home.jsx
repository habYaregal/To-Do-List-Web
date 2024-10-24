import React from "react";
import AuthStatus from "../components/AuthStatus";

const Home = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Home Page</h1>
        <AuthStatus /> 
      </div>
    </div>
  );
};

export default Home;