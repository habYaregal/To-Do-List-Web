// src/screens/Home.js
import React from "react";
import AuthStatus from "../components/AuthStatus";
import SideBar from "../components/SideBar";
import Main from "./Main";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-gray-200">
      {/* Sidebar visible only on medium screens and above */}
      <SideBar />

      {/* Right section containing AuthStatus and Main */}
      <div className="flex flex-col flex-grow p-3">
        <AuthStatus />
        <div className="flex-grow overflow-auto">
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Home;
