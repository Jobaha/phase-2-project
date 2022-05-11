import React from "react";
import { Link } from "react-router-dom";

function Phase1({ resources }) {
    const phase1 = resources.filter((resource) => resource.phase === 1)
    const render = phase1.map((data) => <Link className="Phase" to="/phase1">{data.title}</Link> )
    return (
        <div>
            {render}
        </div>
)}
export default Phase1;