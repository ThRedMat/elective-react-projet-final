import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-5">404 - Page Not Found</h1>
        <p className="text-lg text-gray-700 mb-8">Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="px-5 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all duration-200">Go to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
