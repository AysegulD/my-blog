
import React from 'react';
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
            <a className="btn btn-primary" href="/contact" role="button">Get In Touch</a>
          </ul>
         </div>
    </div>
    <div className="col-md">
    <div>
          <ul>
             <li>
              <a href="/">Home</a>
           </li>
           <li>
             <a href="/about">About</a>
             </li>
             <li>
               <a href="/post">Post</a>
             </li>
             <li>
               <a href="/contact">Contact</a>
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