import React from 'react';
import BlogPost from '../../components/BlogPost';
import LayoutComponent from '../../components/LayoutComponent';
import Sidebar from '../../components/Sidebar';
import "./style.css";



/**
* @author
* @function Post
**/

const Post = (props) => {
  
  return(

  <div>
    <LayoutComponent>
   
    <BlogPost {...props} />
    </LayoutComponent>
   </div>
   
    
        
        
   
   )

 }
 
export default Post