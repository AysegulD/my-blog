import React,{useEffect,useState} from 'react';
import Footer from '../Footer';
import Carded from '../UI/Carded';
import "./style.css";




/** 
* @author
* @function Posts
**/

const Posts = (props) => {
    const [posts,setPosts]=useState([{
      _id:"",
      title:"",
      content:""
    }]);
  useEffect(() =>{
    fetch("/posts")
    .then((res) => res.json())
    .then((postsData) =>{
      setPosts(postsData);   
    })
      .catch((err)=>{
        console.log(err);
      });
        
      },[]);   
  return(
    <div className="postsComponent">   
    <Carded>    
    <div className="posts">                    
      {posts.map((post,i) => 
      <div className="postsContainer"key={i}>
      <h1>{post.title}</h1>
      <p>{post.content.substring(0,100)}<a href={"/post/" + post._id} >...Read More </a></p>
      </div>
      )}
      </div> 
      </Carded> 
      <Footer/>
    </div>
    
   )

 }

export default Posts


