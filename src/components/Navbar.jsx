import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/"><span className="navbar-brand mb-0 h1">MangasApp</span></Link>
      </div>
    </nav>
  );
}

export default Navbar;