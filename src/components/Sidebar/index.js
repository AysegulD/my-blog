import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import Carded from '../UI/Carded';
import "./style.css";
import aysegul3 from "../../Images/personalImages/aysegul3.JPG";
import blogPost from "../../data/blog.json";
import SocialNetwork from "../SocialNetwork";

/**
* @author
* @function Sidebar
**/
const Sidebar = (props) => {
  const [posts,setPosts]=useState([])
  useEffect(() =>{

      const posts= blogPost.data;
      setPosts(posts);
       },[posts]);

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
              <Link to={"/post/" + post.slug} key={post.id}>
               <div className="recentPost">             
              <h3>{post.blogTitle} </h3>
              <span>{post.postedOn}</span>
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