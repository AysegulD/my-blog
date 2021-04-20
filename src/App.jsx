
import React from "react";
import "./App.css";
import BlogNavigate from "./components/BlogNavigate";
import Header from "./components/Header";
import Home from "./containers/Home";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Contact from "./containers/Contact";
import AboutMe from "./containers/AboutMe";
import Posts from "./components/Posts";
import CreatePosts from "./components/CreatePosts";
import PostsName from "./components/PostsName";





function App(){
return (
<Router>
<div className="App">
<Header />
<BlogNavigate />
<Route exact path="/" component={Home} />
<Route path="/about"   component={AboutMe} />
<Route path="/contact" component={Contact} />
<Route path="/posts" component={Posts} />
<Route path="/post/:postId" component={PostsName}  />
<Route path="/createposts" component={CreatePosts} />

</div>

</Router>
        
       
   
        
    );
      
}

export default App;