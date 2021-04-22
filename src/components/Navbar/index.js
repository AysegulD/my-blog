import React, { useState } from 'react';
import {Link} from "react-router-dom";
import "./style.css";
import Search from "../../Images/Icons/Search.png";




/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

    const[search,setSearch]=useState(false)
    const clickSearch=() =>{
        setSearch(true);
    }
    const searchClass=search? "input active" : "input";
  
    const submitSearch=(event) =>{
        event.preventDefault();
        alert("hello");
    }
  return(
    <div className="Navbar">
        <ul className="navbarMenu">
            <li><Link  to="/">Home</Link></li>
            <li><Link  to="/about">About</Link></li>
            <li><Link  to="/posts">Posts</Link></li>
            <li><Link  to="/contact">Contact</Link></li>
        </ul>
        <div className="search">
            <form onSubmit={submitSearch}>
            <input type="text" className={searchClass} placeholder="Search"/>
            <img onClick={clickSearch} className="img" src={Search} alt="Search"/> 
            </form>
        </div>
    </div>
   )

  }

export default Navbar;