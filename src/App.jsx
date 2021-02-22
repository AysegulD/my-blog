import React from "react";
import "./App.css";
import Blog from "./components/Blog";
import Header from "./components/Header";
import Home from "./containers/Home";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Contact from "./containers/Contact";
import Post from "./containers/Post";




function App(){
    return (
        <Router>
        <div className="App">
        <Header />
        <Blog />
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/post/:postId" component={Post} />
        </div>
        </Router>
       
   
        
    );
      
}

export default App;