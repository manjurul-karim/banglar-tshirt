import React from "react";
import OrderReview from "../OrderReview/OrderReview";
import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
  return (
    <nav className="navbar">
      <div className="nav-title">
        <Link to ='/'><img src="/src/images/tiger.png" alt="" /></Link>
        <Link to= '/'><h2>Banglar T-shirt</h2></Link>
      </div>
      <div className="nav-link">
        <Link to="/">Home</Link>
        <Link to="/review">review</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Header;
