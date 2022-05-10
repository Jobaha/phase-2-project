import React from "react";



function Phase1({ resources }) {

    const phase1 = resources.filter((resource) => resource.phase == 1)
    
    const render = phase1.map((data) => <a  href="#">{data.title}</a> )

    return ( 
        <div>
            {render}
        </div>
    
)}


export default Phase1;