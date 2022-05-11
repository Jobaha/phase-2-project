import React from "react";
import { Link } from 'react-router-dom';


function Phase1({ resources }) {
   

    const phase1 = resources.filter((resource) => resource.phase === 1)
    
    const sideBarLink = phase1.map((data) => <Link to=".">{data.title}</Link> )

    return ( 
        <div>
            {sideBarLink}
            <p>Hello</p>
        </div>
    
)}


export default Phase1;