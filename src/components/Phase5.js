import React from "react";
import { Link } from "react-router-dom";

function Phase5({ resources }) {
    const phase5 = resources.filter((resource) => resource.phase === 5)
    const render = phase5.map((data) => <Link className="Phase" to="/phase5">{data.title}</Link> )
    return (
        <div>
            {render}
        </div>
)}
export default Phase5;