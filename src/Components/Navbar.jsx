
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
      <Link className="navbar-brand" to="/">Communion Hub</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/events">Events</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
