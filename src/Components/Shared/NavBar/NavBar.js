import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="mb-5" style={{ width: "100%" }}>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top ">
        <div className="container-fluid container">
          <h3 className="text-white customFont px-3 font-weight-bold">
           FOOD SPARKS
          </h3>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} className="navbarIcon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav text-uppercase ms-auto ">
              <Link className="nav-link px-3 mx-2 text-white " to="/home">
                Home
              </Link>
              <Link className="nav-link px-3 mx-2 text-white " to="/menu">
                Menu
              </Link>
              <Link className="nav-link px-3 mx-2 text-white " to="/about">
                About
              </Link>
              <Link className="nav-link px-3 mx-2 text-white " to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
