
import React from 'react';
import "./style.css";
import Button from "react-bootstrap/Button";
import SocialNetwork from "../SocialNetwork";

/**
* @author
* @function Footer
**/


const Footer = (props) => {
 
  const year=new Date().getFullYear()
  return(
    <footer className="footer">
    <div className="FooterContainer">
      <div className="row"  >
        <div className="col-md-6" >
          <ul>
            <Button variant="primary">Get In Touch</Button>{' '} 
          </ul>
        </div>
        <div className="col" md="3">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Post</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="col" md="3">
            <ul>
            <li>
              <a href="#">On Instagram</a>
            </li>
            <li>
              <a href="#">On Facebook</a>
            </li>
            <li>
              <a href="#">AYDEMGUL@HOTMAIL.COM</a>
            </li>
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