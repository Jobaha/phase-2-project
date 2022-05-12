import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Phase1({ resources }) {
   
    const [clickedLink, setClickedLink] = useState("")

    const phase1 = resources.filter((resource) => resource.phase === 1)
    const phase1Resources = phase1.filter((resource) => resource.title === clickedLink) 
    const render = phase1.map((data) => <Link className="Phase" to="/phase1">{data.title} </Link> )
    //console.log(phase1)

        

        function handleClick(e) {
            setClickedLink(e.target.innerText)
            
        }
        
    return (
        <div className="Preview">
              {clickedLink ? 
                        <>
                            <p>{phase1Resources[0].title}</p>
                            <p>{phase1Resources[0].description}</p> 
                        </> :
                null}
                <p onClick={(e) => handleClick(e)}>{render}</p>
            
                
        </div>
)}
export default Phase1;