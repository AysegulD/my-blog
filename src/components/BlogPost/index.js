
import React,{useState,useEffect} from 'react';
import Card from '../UI/Card';
import "./style.css";
import blogPost from "../../data/blog.json";
import {Link} from "react-router-dom";
import picture from "../../blogpostImg/bg pic.jpg"


/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {
    const [post,setPost]=useState({
        id:"",
        blogCategory:"",
        blogTitle:"",
        postedOn:"",
        author:"",
        blogImage:"",
        blogText:""
    });

    const [postId,setPostId]=useState("");
    useEffect(() =>{    

        const postId=props.match.params.postId;
        
        const post= blogPost.data.find(post =>post.id == postId);
        setPost(post);
        
        setPostId(postId);
        
    },[post,props.match.params.postId]);

    if(post.blogImage =="") return null;


  return(
      
      <div className="blogPost">
        <Card>  
        <div className="postHeader">
        <span className="postFeatured">Featured</span>
        <h1 className="postTitle">{post.blogTitle}</h1>
        <span className="postBy">posted on{post.postedOn} by {post.author}</span>
        </div>
            <div className="blogPostimg">
            <img src={picture} alt="post image"/>  
            </div>
        <div className="firstPost">
            <h3>{post.blogTitle}</h3>
            <p>{post.blogText}</p>
        </div>
    </Card>
    </div>
   
    
  )
}  

export default BlogPost 