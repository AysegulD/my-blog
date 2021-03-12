import React from 'react';
import Footer from '../../components/Footer';
import Button from "react-bootstrap/Button";
import user from "../../Images/Icons/user.svg";
import emailtag from "../../Images/Icons/emailtag.svg";
import pencil from "../../Images/Icons/pencil.svg";
import tag from "../../Images/Icons/tag.svg";
import paper from "../../Images/Icons/paper.svg";
import "./style.css";

const Contact = (props) => {
  
  return(
    <div className="ContactContainer">
    <form className="ContactForm">
    <h4 className="formHeader">Get in touch</h4>
      <div className="contactInform">
      <img src={user} alt="user"/>
        <label for="name">Your Name</label>
        <input type="text"  className="inputName" id="yourName" placeholder="Enter Your Name"/>
        </div>
        <div className="contactInform">
        <img src={emailtag} alt="user"/>
        <label for="email">Your Email</label>
        <input type="email" className="inputEmail" id="yourEmail" placeholder="Enter Your Email Address" />
        </div>
        <div className="contactInform">
        <img src={tag} alt="user"/>
        <label  for="subject">Subject</label>
        <input type="text" className="inputSubject" id="subject"/>
        </div>
        <div className="userMessage">
        <img src={pencil} alt="user"/>
        <label for="Your Message">Your Message</label>
        <textarea type="text" />
        </div>
      <div>
      <Button className="formButton" variant="outline-secondary">Send <img src={paper} alt="" /></Button>{' '}
      </div>
    </form>
    <Footer />  
    </div>
   )

 }

export default Contact