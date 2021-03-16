
import React,{useState,useEffect} from 'react';
import Carded from '../UI/Carded';
import "./style.css";
import blogPost from "../../data/blog.json";


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
        setPostId(postId)
        },[post,props.match.params.postId]);

    if(post.blogImage =="") return null;

        
  return(
      
      <div className="blogPost">
        <Carded>  
        <div className="postHeader">
        <span className="postFeatured">Featured</span>
        <h1 className="postTitle">{post.blogTitle}</h1>
        <span className="postBy">posted on{post.postedOn} by {post.author}</span>
        </div>
            <div className="blogPostimg">
           
            <img src={"/blogpostImg/" + post.blogImage} alt="post image"/>  
            </div>
        <div className="firstPost">
            <h3>{post.blogTitle}</h3>
            <p>{post.blogText}</p>
        </div>
    </Carded>
    </div>
   
    
  )
}  

export default BlogPost 