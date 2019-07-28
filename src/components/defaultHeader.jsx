import React from "react";
import { NavLink } from "react-router-dom";

const DefaultHeader = props => {
  return (
    <header className="page-header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand">Virtusa Assignment</span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/user">
                Users
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/dashboard">
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default DefaultHeader;
