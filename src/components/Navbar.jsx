import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { useCookies } from 'react-cookie';
import '../styles/navBar.css'; // Fichier CSS séparé

const Navbar = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['uid']); // On utilise le hook useCookies pour gérer le cookie

  const [loggedIn, setLoggedIn] = useState(false); // On initialise l'état de connexion à false

  useEffect(() => {
    if (cookies.uid) {
      setLoggedIn(true); // Si le cookie existe, on met l'état de connexion à true
    } else {
      setLoggedIn(false); // Sinon, on met l'état de connexion à false
    }
  }, [cookies.uid]);

  const handleLogout = () => {
    removeCookie('uid'); // On supprime le cookie uid
    setLoggedIn(false); // On met l'état de connexion à false
  };

  return (
    <nav className="bg-gray-900">
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <Link to="/">
            <span className="text-xl text-white font-bold md:text-2xl">MangasApp</span>
          </Link>
        </div>

        <div className="mt-4 md:mt-0">
          <SearchBar placeholder="Chercher un mangas" />
        </div>
        
        {loggedIn ? (
          <div className='login'>
            <Link to="/profil">
              <img src="mon-logo.png" alt="Logo de profil" className="h-8 w-8 rounded-full" />
              <FiLogOut className="text-white hover:text-gray-400" onClick={handleLogout} /> {/* Affichage de l'icone de déconnexion si l'utilisateur est connecté */}
            </Link>
          </div>
        ) : (
          <div className='login'>
            <Link to="/Login">
              <img src="./img/kisspng-computer-icons-avatar-download-user-profile-user-avatar-5b5dd917e65c43.8958822015328770799436.png" alt="Logo de profil" className="h-8 w-8 rounded-full" />
              {/* Affichage de l'icone de connexion si l'utilisateur n'est pas connecté */}
            </Link>
          </div>
        )}
        
      </div>
    </nav>
  );
};

export default Navbar;
