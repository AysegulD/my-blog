
import React from "react";
import "./App.css";
import BlogNavigate from "./components/BlogNavigate";
import Header from "./components/Header";
import Home from "./containers/Home";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Contact from "./containers/Contact";
import Post from "./containers/Post";
import AboutMe from "./containers/AboutMe";



function App(){
    return (
        <Router>
        <div className="App">
        <Header />
        <BlogNavigate />
        <Route exact path="/" component={Home} />
        <Route path="/about"   component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/post/:postId" component={Post} />
        </div>
     
        </Router>
        
       
   
        
    );
      
}

export default App;