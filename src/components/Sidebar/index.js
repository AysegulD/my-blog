import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import Carded from '../UI/Carded';
import "./style.css";
import aysegul3 from "../../Images/personalImages/aysegul3.JPG";
import SocialNetwork from "../SocialNetwork";

/**
* @author
* @function Sidebar
**/
const Sidebar = (props) => {
  const [posts,setPosts]=useState([])
  useEffect(() =>{
    fetch("http://localhost:3001/posts/")
    .then((res) => res.json())
    .then((postRecent) =>{
      setPosts(postRecent)  
    });
  },[]);
    
  return(
    <div className="sidebar" >
      <Carded style={{marginBottom:"20px",padding:"20px",boxSizing:"border-box"}}>
        <div className="sidebarHeader">
          <span>About</span>
          </div>
          <div className="aboutImg">
            <img src={aysegul3} alt="About img" />
          </div>
          <div className="about">
            <p className="aboutme">My name is Aysegul Demir and I am a junior front-end developer <a href="/about">...</a></p>
            
          </div>
          </Carded>
          <Carded style={{marginBottom:"20px",boxSizing:"border-box"}}>
          <div className="sidebarHeader">
            <span>
           <SocialNetwork />
            </span>
          </div>
          
          </Carded>
          <Carded style={{marginBottom:"20px",boxSizing:"border-box"}}>
          <div className="sidebarHeader">
            <span>Recent Posts</span>
          </div>
          <div className="posts" >
            {
              posts.map(post=>{
                
                return (
              <Link to={"/post/" + post._id} >
               <div className="recentPost">             
              <h3>{post.title} </h3>
              
                </div> 
             </Link>
                )
              })
            }
              
          </div>
          </Carded>
    </div>
    
   )
        }
   

        

export default Sidebar  