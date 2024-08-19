import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";
import ThemeToggle from '../../ThemeToggle';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <Link className="navbar-brand ml-4" to="/">Sai Shubham Tours and Travels</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="d-flex justify-content-center mt-2 mt-lg-1 mr-2 ">
            <ThemeToggle />

            <Link to="/book-now">
              <button className="btn btn-outline-primary mr-3 ml-3" type="button">Book Now</button>
            </Link>


          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
