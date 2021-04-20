import React, { useState } from 'react';
import axios from "axios";

/**
* @author
* @function CreatePost
**/

const CreatePosts = (props) => {
  const [input,setInput]=useState({
    title:"",
    content:""
  })
  
  function handleChange(event){
      const{name,value}=event.target;
      setInput(prevInput =>{
        return{
          ...prevInput,
          [name]:value
        }
      })
  }
  function handleClick(event){
    event.preventDefault();
   const newPost={
     title:input.title,
     content:input.content
   }
   axios.post("http://localhost:3001/create",newPost)
  }
  
  return(
    <div>
    <h1>Create Post</h1>
    <form>
        <div className="form-group">
            <input  onChange={handleChange} name="title" value={input.title} autoComplete="off" className="form-control"></input>
        </div>
        <div>
            <textarea onChange={handleChange} name="content" value={input.content} autoComplete="off" className="form-control"> </textarea>
        </div>
            <button onClick={handleClick}type="submit" className="btn btn-lg btn-info">ADD POST</button>
           
        
    </form>
    </div>
   )

 }

export default CreatePosts