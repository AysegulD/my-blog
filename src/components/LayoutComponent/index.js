
import React from 'react';
import Sidebar from '../Sidebar';
import "./style.css";

// /Change this one 
/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <div className="LayoutContainer">
    {props.children}
        <Sidebar />
    </div>
   )

 }

export default Layout