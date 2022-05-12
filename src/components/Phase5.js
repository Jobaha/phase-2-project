import React, { useState } from "react";
import { Link } from "react-router-dom";

function Phase5({ resources }) {

    const [clickedLink, setClickedLink] = useState("")

    const phase5 = resources.filter((resource) => resource.phase === 5)
    const phase5Resources = phase5.filter((resource) => resource.title === clickedLink)
    const render = phase5.map((data) => <Link className="Phase" to="/phase5">{data.title}</Link> )

    function handleClick(e) {
        setClickedLink(e.target.innerText)            
    }

    return (
        <div className="Preview">
              {clickedLink ? 
                        <div>
                            <h2>{phase5Resources[0].title}</h2>
                            <a href={phase5Resources[0].link}>Click here for more Information</a>
                            <p>{phase5Resources[0].description}</p> 
                        </div> :
                null}
                <p onClick={(e) => handleClick(e)}>{render}</p>
            
                
        </div>
)}
export default Phase5;