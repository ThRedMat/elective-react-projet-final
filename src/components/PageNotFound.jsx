import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 text-center">
          <h1 className="display-4">404 - Page Not Found</h1>
          <p className="lead">Sorry, the page you are looking for does not exist.</p>
          <Link to="/" className="btn btn-primary mt-3">Go to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
