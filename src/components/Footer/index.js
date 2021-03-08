
import React from 'react';
import "./style.css";



import Button from "react-bootstrap/Button";


/**
* @author
* @function Footer
**/

const Footer = (props) => {
  const year=new Date().getFullYear()
  return(
    <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-6" >
          <h3>Footer Content</h3>
          <ul>
            <li>
            Button
            </li>
          </ul>
        </div>
        <div className="col" md="6">
          <h4> Title</h4>
          <ul>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
   
    <div>
     <p className="footerP"> Copyright ⓒ {year} AD </p>
    </div>
    </footer>
   )

 }

export default Footer