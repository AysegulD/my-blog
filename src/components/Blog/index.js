import React from 'react';
import Logo from '../Logo';
import Navbar from '../Navbar';
import SocialNetwork from '../SocialNetwork';
import Card from '../UI/Card';
import "./style.css";

/**
* @author
* @function Blog
**/

const Blog = (props) => {
  return(
    <div>
      <Card>
      <div >
      <Logo />
      
      <Navbar />
      
    
      </div>
       
      </Card>
    </div>
   )

 }

export default Blog;