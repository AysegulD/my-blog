
import React from 'react';
import {Link} from "react-router-dom";
import "./style.css";
import email from "../../Images/Icons/email.svg";
import SocialNetwork from "../SocialNetwork";

/**
* @author
* @function Footer
**/


const Footer = (props) => {
 
  const year=new Date().getFullYear()
  return( 
<footer >
    <div className="footerContainer">
  <div className="row">
    <div className="col-md">
    <div>
          <ul>
            <Link to="/contact" className="btn btn-primary" role="button">Get In Touch</Link>
          </ul>
         </div>
    </div>
    <div className="col-md">
    <div>
          <ul>
          <li>
              <Link to="/my-blog">Home</Link>
           </li>
           <li>
           <Link to="/about">About</Link>
             </li>
             <li>
             <Link to="/posts">Posts</Link>
             </li>
             <li>
             <Link to="/contact">Contact</Link>
             </li>
            </ul>
           </div>
    </div>
    <div className="col-md">
      <div className="socialIcons">
             <ul >
             <h3>Follow Me</h3>
             <SocialNetwork />
            <img src={email} alt="email"/>
             <a  href="mailto:aydemgul@hotmail.com">AYDEMGUL@HOTMAIL.COM</a>
             </ul>
           </div>
    </div>
  </div>
</div>
    <div className="year">
     <p className="footerP"> Copyright ⓒ {year} AD </p>
    </div>
    </footer>
   )

 }

export default Footer