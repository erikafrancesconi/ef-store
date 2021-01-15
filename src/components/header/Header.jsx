import React from 'react';

import { Link } from "react-router-dom";

import './Header.css';

const Header = () => {
  return (
    <header>
      <h1><Link to="/">EF Store</Link></h1>
      <ul>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </header>
  )
}

export default Header;