// src/components/SideBar.js
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Open Menu button, only visible when sidebar is closed */}
            {!isOpen && (
                <button
                    className="md:hidden p-2 m-2 text-gray-700 hover:text-gray-900 transition"
                    onClick={toggleSidebar}
                >
                    <FaBars size={24} />
                </button>
            )}

            {/* Sidebar container */}
            <div
                className={`${
                    isOpen ? "block" : "hidden"
                } md:block h-screen w-full max-w-xs bg-gray-100 text-gray-700 p-4 rounded-lg shadow-md flex flex-col fixed md:relative top-0 left-0 z-50`}
            >
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold">Menu</h1>
                    {/* Cancel button to close the sidebar on mobile */}
                    <button
                        className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition"
                        onClick={toggleSidebar}
                    >
                        <FaTimes size={24} />
                    </button>
                </div>
                
                <nav className="flex flex-col gap-4 flex-grow">
                    <button className="py-2 px-4 bg-gray-200 rounded hover:bg-gray-300 transition">
                        Home
                    </button>
                    <button className="py-2 px-4 bg-gray-200 rounded hover:bg-gray-300 transition">
                        Profile
                    </button>
                    <button className="py-2 px-4 bg-gray-200 rounded hover:bg-gray-300 transition">
                        Settings
                    </button>
                    <button className="py-2 px-4 bg-gray-200 rounded hover:bg-gray-300 transition">
                        Notifications
                    </button>
                    <button className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 transition mt-auto">
                        Logout
                    </button>
                </nav>
            </div>
        </>
    );
};

export default SideBar;
