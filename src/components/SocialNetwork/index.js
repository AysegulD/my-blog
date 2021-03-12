import React from 'react';
import "./style.css";
import facebook2 from "../../Images/Icons/facebook2.svg";
import instagram2 from "../../Images/Icons/instagram2.svg";
import linkedin2 from "../../Images/Icons/linkedin2.svg";
import github from "../../Images/Icons/github.png";

/**
* @author
* @function SocialNetwork
**/

const SocialNetwork = (props) => {
  return(
    <div className="iconSocial">
        <a href="https://www.facebook.com/aysegul.demir.338863/"><img src={facebook2} className="iconF" alt="facebook" /></a>
        <a href=""> <img src={instagram2} className="iconF"alt="instagram" /></a>
        <a href="https://www.linkedin.com/in/ay%C5%9Feg%C3%BCl-demir-b4b967101/"> <img src={linkedin2} className="iconF"alt="linkedin" /></a>
        <a href="https://github.com/AysegulD"> <img src={github} className="iconF"alt="github" /></a>  
    </div>
   )

 }

export default SocialNetwork