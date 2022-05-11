import React from "react";
import { Link } from "react-router-dom";

function Phase2({ resources }) {
    const phase2 = resources.filter((resource) => resource.phase === 2)
    const render = phase2.map((data) => <Link className="Phase" to="/phase2">{data.title}</Link> )
    return (
        <div>
            {render}
        </div>
)}
export default Phase2;