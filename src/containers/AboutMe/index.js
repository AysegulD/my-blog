
import React from 'react';
import "./style.css";
import aysegul3 from "../../Images/personalImages/aysegul3.JPG";
import Card from '../../components/UI/Card';
import hobbies from "../../Images/personalImages/hobbies.JPG";
import Footer from '../../components/Footer';

/**
* @author
* @function AboutMe
**/
const AboutMe = (props) => {
  return(
    <div className="aboutContainer">
          <Card>
         <div className="AboutImg"> 
          <img src={aysegul3}   alt="Aysegul img" />
          </div> 
           <div className="aboutMe">
           <h1 className="aboutheader"> Hello!</h1>
            <p className="about">My name is Aysegul Demir and I am a junior front-end developer based in London.
            <p>I can decribe myself enthusiastic and results-driven junior front-end developer with a background in finance.</p>
            <p>After 7 years finance experience ,I have decided to change my career path and suddenly I found myself in developer world, of course with my partner`s support,and I would say that it is a big challenge for me,but I love the challenge.</p>
            <p>I am passionate about coding and open to learning new things. I am currently working on my own website.
            I like designing and creating dynamic websites,this is what I love to do. 
            When I am not coding ,I mostly work out or learn new things:) and, like any woman, I am very interested in fashion,styling and shopping.</p>
            </p>
          </div> 
          <div className="hobbiesImg">
          <img src={hobbies} alt="hobbies"/>
          </div>
          </Card>
          <div><Footer /></div>
       </div> 
       
       
    
   )

 }

export default AboutMe