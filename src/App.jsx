
import React from "react";
// import "../node_modules/bootstrap/dist/css/boostrap.min";



import Blog from "./components/Blog";
import Header from "./components/Header";
import Home from "./containers/Home";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Contact from "./containers/Contact";
import Post from "./containers/Post";
import AboutMe from "./containers/AboutMe";
import "./App.css";


function App(){
    return (
        <Router>
        <div className="App">
        <Header />
        <Blog />
        <Route exact path="/" component={Home} />
        <Route path="/about"   component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/post/:slug" component={Post} />
        </div>
     
        </Router>
        
       
   
        
    );
      
}

export default App;