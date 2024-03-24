// Layout.js
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-500 text-white py-4">
        <h1 className="text-3xl font-bold text-center">Welcome to UniVerse</h1>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className=" text-white">
        <div className="w-full h-16 bg-blue-700">
          {/* Wavy border SVG */}
          <svg
            className="w-full h-16"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1200 0L0 0 0 32.1C94.9 44.4 193.9 51.9 297.1 54.4 470.2 58.4 648.3 45.5 824 21.6c74.1-7.9 150.7-18.2 221.9 8.5C1092 60.6 1200 65.1 1200 65.1V0z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
        <div className="text-center">
          <p>UniVerse</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
