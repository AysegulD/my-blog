import React,{ useEffect, useState } from 'react';
import Carded from "../../components/UI/Carded"
import Footer from '../../components/Footer';
import "./style.css";
import blog from "../../data/blog.json";



/**
* @author
* @function Posts
**/

const Posts = (props) => {

  const [postsPage,setPost]=useState ([])

    useEffect(()=>{
     const postsPage=blog.data;
      setPost(postsPage);
    },[postsPage]);
      
        return (
        <div>
        <Carded>
          {
            postsPage.map((post,i)=>{            
              return (
             <div className="postsContainer" key={i}>             
            <h3>{post.blogTitle} </h3>
            <span>{post.blogText}</span>
              </div> 
              
              )
            })
          }
          </Carded>
          <Footer/>
          </div>
        )
        
        }

 
export default Posts