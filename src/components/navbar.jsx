import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";


export const Navbar = () => {
  return (
    
    <div className="navbar">
      <div className="links">
      
      <Link to="/aboutus">About us</Link>
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
        <Link to="/search button">Search</Link>
      </div>
      
    </div>
    
  );
};