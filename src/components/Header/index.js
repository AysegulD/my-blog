import React from 'react';
import "./style.css";
import SocialNetwork from '../SocialNetwork';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
        <nav className="navbar">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </nav>
        <SocialNetwork />
    </header>
   )

 }

export default Header;