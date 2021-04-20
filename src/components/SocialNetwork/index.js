import React from 'react';
import "./style.css";
import facebook from "../../Images/Icons/facebook.svg";
import instagram from "../../Images/Icons/instagram.svg";
import linkedin from "../../Images/Icons/linkedin.svg";
import github from "../../Images/Icons/github.png";

/**
* @author
* @function SocialNetwork
**/

const SocialNetwork = (props) => {
  return(
    <div className="iconSocial">
        <a href="https://www.facebook.com/aysegul.demir.338863/"><img src={facebook} className="iconF" alt="facebook" /></a>
        <a href=""> <img src={instagram} className="iconF"alt="instagram" /></a>
        <a href="https://www.linkedin.com/in/ay%C5%9Feg%C3%BCl-demir-b4b967101/"> <img src={linkedin} className="iconF"alt="linkedin" /></a>
        <a href="https://github.com/AysegulD"> <img src={github} className="iconF"alt="github" /></a>  
    </div>
   )

 }

export default SocialNetwork