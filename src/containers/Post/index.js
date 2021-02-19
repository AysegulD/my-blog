import React from 'react';
import BlogPost from '../../components/BlogPost';
import Sidebar from '../../components/Sidebar';
import Card from '../../components/UI/Card';
import "./style.css";


/**
* @author
* @function Post
**/

const Post = (props) => {
  
  return(
    <section className="sectionPost">
        <BlogPost {...props} />
        <Sidebar />
    </section>
   )

 }
 
export default Post