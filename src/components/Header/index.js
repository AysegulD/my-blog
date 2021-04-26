import React from 'react';
import {Link} from "react-router-dom";
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
            <Link to="/my-blog">Home</Link>
            <Link to="/contact">Contact</Link>
        </nav>
        <SocialNetwork />
    </header>
   )

 }

export default Header;