import React, { useEffect, useState } from 'react'
import picturedata from "../../data/blog.json";
import Carded from "../UI/Carded";
import Footer from "../../components/Footer"
import "./style.css";


/**
* @author
* @function PostsName
**/

const PostsName = (props) => {

  const [postPage,setPostPage]=useState([{
    _id:"",
    title:"",
    content:"",
  }])
  const [post,setPost]=useState({
    id:"",
    blogImage:""
  })
  const [postId,setPostId]=useState("")
    useEffect(()=>{
      const postId=props.match.params.postId;
      const post=picturedata.data.find(post =>post.id == postId);
      console.log(post);
      
      fetch("http://localhost:3001/post/"+ postId)
      .then((res) => res.json())
      .then((postPageName) =>{
        setPostPage(postPageName);
        setPostId(postId);
        setPost(post);
        console.log(post);
        
      });

    },[])

        return (
          <div className="postsName">
        <Carded>
            <div className="postsNamePic">
            <img src={"/blogpostImg/"+ post.blogImage} alt="post Images" />
            </div>
          <div className="postsNameHeader">
          <h1>{postPage.title}</h1>
          <p className="postsNameP">{postPage.content}</p>
          </div>              
       </Carded>
       <Footer/>

       </div>
      
        )
    
        
    }
  

    
    
  
 

export default PostsName    