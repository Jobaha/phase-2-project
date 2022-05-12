import React, { useState } from "react";
import { Link } from "react-router-dom";

function Phase4({ resources }) {

    const [clickedLink, setClickedLink] = useState("")

    const phase4 = resources.filter((resource) => resource.phase === 4)
    const phase4Resources = phase4.filter((resource) => resource.title === clickedLink)
    const render = phase4.map((data) => <Link className="Phase" to="/phase4">{data.title}</Link> )

    function handleClick(e) {
        setClickedLink(e.target.innerText)            
    }

    return (
        <div className="Preview">
              {clickedLink ? 
                        <div>
                            <h2>{phase4Resources[0].title}</h2>
                            <a href={phase4Resources[0].link}>Click here for more Information</a>
                            <p>{phase4Resources[0].description}</p> 
                        </div> :
                null}
                <p onClick={(e) => handleClick(e)}>{render}</p>
            
                
        </div>
)}
export default Phase4;