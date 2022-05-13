import React, { useState } from "react";
import { Link } from "react-router-dom";

function Phase3({ resources }) {

    const [clickedLink, setClickedLink] = useState("")

    const phase3 = resources.filter((resource) => resource.phase === 3)
    const phase3Resources = phase3.filter((resource) => resource.title === clickedLink)
    const render = phase3.map((data) => <Link className="Phase" to="/phase3">{data.title}</Link> )

    function handleClick(e) {
        setClickedLink(e.target.innerText)            
    }

    return (
        <div className="Preview">
              {clickedLink ? 
                        <div>
                            <h2>{phase3Resources[0].title}</h2>
                            <a href={phase3Resources[0].link}>Click here for more Information</a>
                            <p>{phase3Resources[0].description}</p> 
                        </div> :
                null}
                <p onClick={(e) => handleClick(e)}>{render}</p>
            
                
        </div>
)}
export default Phase3;