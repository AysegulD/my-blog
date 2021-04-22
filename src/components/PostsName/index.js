import React, { useEffect, useState } from 'react'
import LayoutComponent from "../../components/LayoutComponent";
import BlogPost from "../../components/BlogPost"
import Footer from "../../components/Footer"
import "./style.css";


/**
* @author
* @function PostsName
**/

const PostsName = (props) => {
  
    return(
  
    <div>
      <LayoutComponent> 
      <BlogPost {...props} />
      </LayoutComponent>
      <Footer/>
     </div>
     
      
          
          
     
     )
  
   }
   
  

    
    
  
 

export default PostsName    