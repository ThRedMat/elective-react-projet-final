import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { FiLogIn } from 'react-icons/fi';
import '../styles/navBar.css'; // Fichier CSS séparé

const Navbar = () => {
  return (
    <nav className="bg-gray-900">
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <Link to="/">
            <span className="text-xl text-white font-bold md:text-2xl">MangasApp</span>
          </Link>
        </div>

        <div className="mt-4 md:mt-0">
          <SearchBar placeholder="Search for a manga..." />
        </div>
        <div className='login'>
          <Link to="/Login">
            <FiLogIn className="text-white hover:text-gray-400" /> {/* Ajout de styles spécifiques pour le bouton de connexion */}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
