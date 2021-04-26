
import React from "react";
import "./App.css";
import BlogNavigate from "./components/BlogNavigate";
import Header from "./components/Header";
import Home from "./containers/Home";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Contact from "./containers/Contact";
import Posts from "./containers/Posts";
import AboutMe from "./containers/AboutMe";
import PostsName from "./components/PostsName"



function App(){
    return (
        <Router>
        <div className="App">
        <Header />
        <BlogNavigate />
        
        <Route path="/about"   component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/post/:postId" component={PostsName} />
        <Route path="/posts" component={Posts} />
        <Route  exact path="/" component={Home} />
        <Route   path="/my-blog" component={Home} />


       
        </div>
     
        </Router>
        
       
   
        
    );
      
}

export default App;