import React from 'react';
import "./style.css";

/**
* @author
* @function Carded
**/

const Carded = (props) => {
  return(
    <div className="CardComponent" {...props}>
        {props.children}
    </div>
   )

 }

export default Carded