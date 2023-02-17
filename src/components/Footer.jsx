import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex justify-between">
        <div className="flex">
          <ul className="mr-12">
            <li className="text-xl mb-4 font-bold">Navigation</li>
            <li>
              <Link to="/" className="block py-2 hover:underline">Go to Home</Link>
            </li>
            <li>
              <Link to="/anime" className="block py-2 hover:underline">Go to Anime</Link>
            </li>
            <li>
              <Link to="/mangas" className="block py-2 hover:underline">Go to Mangas</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
