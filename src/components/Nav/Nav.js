import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
  const getActiveLinkClass = ({ isActive }) =>
    isActive ? "nav-link active-link" : "nav-link";

  return (
    <nav className="navbar">
      <div className="brand-title">RICKSPICK</div>
      <div className="nav-links">
        <NavLink to="/" className={getActiveLinkClass}>
          HOME
        </NavLink>
        <NavLink to="/shop" className={getActiveLinkClass}>
          SHOP
        </NavLink>
        <NavLink to="/order" className={getActiveLinkClass}>
          ORDER
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
