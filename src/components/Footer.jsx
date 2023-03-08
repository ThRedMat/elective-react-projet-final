import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 flex justify-center">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex justify-center">
          <ul className="mr-12 flex flex-wrap">
            <li className="mr-6">
              <Link to="/" className="block py-4 hover:underline">Go to Home</Link>
            </li>
            <li className="mr-6">
              <Link to="/anime" className="block py-4 hover:underline">Go to Anime</Link>
            </li>
            <li className="mr-6">
              <Link to="/manga" className="block py-4 hover:underline">Go to Mangas</Link>
            </li>
            <li>
              <Link to="/suggestions" className='block py-4 hover:underline'>Nos mangas préférés</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
