import React, { useState } from "react";
import { Link } from "react-router-dom";

function Phase2({ resources }) {

    const [clickedLink, setClickedLink] = useState("")

    const phase2 = resources.filter((resource) => resource.phase === 2)
    const phase2Resources = phase2.filter((resource) => resource.title === clickedLink) 
    const render = phase2.map((data) => <Link className="Phase" to="/phase2">{data.title}</Link> )

    function handleClick(e) {
       setClickedLink(e.target.innerText)        
    }

    return (
        <div className="Preview">
        {clickedLink ? 
                  <div>
                      <h2>{phase2Resources[0].title}</h2>
                      <a href={phase2Resources[0].link}>Click here for more Information</a>
                      <p>{phase2Resources[0].description}</p> 
                  </div> :
          null}
          <p onClick={(e) => handleClick(e)}>{render}</p>         
        </div>
)}
export default Phase2;