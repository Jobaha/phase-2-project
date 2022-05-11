import React from "react";
import { Link } from "react-router-dom";

function Phase4({ resources }) {
    const phase4 = resources.filter((resource) => resource.phase === 4)
    const render = phase4.map((data) => <Link className="Phase" to="/phase4">{data.title}</Link> )
    return (
        <div>
            {render}
        </div>
)}
export default Phase4;