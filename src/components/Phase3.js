import React from "react";
import { Link } from "react-router-dom";

function Phase3({ resources }) {
    const phase3 = resources.filter((resource) => resource.phase === 3)
    const render = phase3.map((data) => <Link className="Phase" to="/phase3">{data.title}</Link> )
    return (
        <div>
            {render}
        </div>
)}
export default Phase3;