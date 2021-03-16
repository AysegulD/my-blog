import React from 'react';
import Logo from '../Logo';
import Navbar from '../Navbar';
import Carded from '../UI/Carded';
import "./style.css";


/**
* @author
* @function Blog
**/

const Blog = (props) => {
  return(
    <div>
      <Carded>
      <div >
      <Logo />
      <Navbar />  
      </div>     
      </Carded>
    </div>
   )

 }

export default Blog;