import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 flex justify-center">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex justify-center">
          <ul className="mr-12 flex flex-wrap">
            <li className="mr-6">
              <Link to="/" className="block py-4 hover:underline">Allez au mangas</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
