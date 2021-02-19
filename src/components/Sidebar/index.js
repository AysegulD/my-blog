import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import Card from '../UI/Card';
import "./style.css";
import aysegul from "../../Images/personal images/aysegul.jpg";
import blogPost from "../../data/blog.json";



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
    <div className="sidebar">
      <Card style={{marginBottom:"20px",padding:"20px",boxSizing:"border-box"}}>
        <div className="sidebarHeader">
          <span>About</span>
          </div>
          <div className="aboutImg">
            <img src={aysegul} alt="About img" />
          </div>
          <div className="about">
            <p className="aboutme">My name is Aysegul Demir and I am a junior software developer.</p>
          </div>
          </Card>
          <Card style={{marginBottom:"20px",boxSizing:"border-box"}}>
          <div className="sidebarHeader">
            <span>Social Network</span>
          </div>
          
          </Card>
          <Card style={{marginBottom:"20px",boxSizing:"border-box"}}>
          <div className="sidebarHeader">
            <span>Recent Posts</span>
          </div>
          <div className="posts" >
            {
              posts.map(post=>{
                
                return (
              <Link to={"/post/" + post.id} key={post.id}>
               <div className="recentPost">             
              <h3>{post.blogTitle} </h3>
              <span>{post.postedOn}</span>
                </div> 
             </Link>
                )
              })
            }
                
            
          </div>
          </Card>
    </div>
    
   )
        }
   

        

export default Sidebar  