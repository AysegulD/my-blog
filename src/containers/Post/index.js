import React from 'react';
import BlogPost from '../../components/BlogPost';
import LayoutComponent from '../../components/LayoutComponent';
import "./style.css";


/**
* @author
* @function Post
**/

const Post = (props) => {
  
  return(
   
    <LayoutComponent>
    <BlogPost {...props} />
    </LayoutComponent>
        
        
   
   )

 }
 
export default Post