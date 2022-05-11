import React from "react";
import { Link, NavLink } from "react-router-dom";
import Search from "./Search";



function Header() {

    return(
        <header>
            <nav>
                <Link className="header" to="/phase1">
                    <h1>//Flatsource</h1>
                </Link>

            <div className="navigation">
                <NavLink className="button" exact to="/phase1">
                    Phase 1
                </NavLink>
                <NavLink className="button" exact to="/phase2">
                    Phase 2
                </NavLink>
                <NavLink className="button" exact to="/phase3">
                    Phase 3
                </NavLink>
                <NavLink className="button" exact to="/phase4">
                    Phase 4
                </NavLink>
                <NavLink className="button" exact to="/phase5">
                    Phase 5
                </NavLink>
            <Search />
            </div>
            </nav>
        </header>
        
        



)}

export default Header;