import React from "react";
import { Link, NavLink } from "react-router-dom";
import Search from "./Search";



function Header({ handleSearch, search }) {

    return(
        <>       
                <div className="header">  
                <Link className="header" to="/phase1" >
                    <h1>//Flatsource</h1>
                </Link>
                </div>  

            <nav className="navigation">
                <NavLink className="button" to="/phase1">
                    Phase 1
                </NavLink>
                <NavLink className="button" to="/phase2">
                    Phase 2
                </NavLink>
                <NavLink className="button" to="/phase3">
                    Phase 3
                </NavLink>
                <NavLink className="button" to="/phase4">
                    Phase 4
                </NavLink>
                <NavLink className="button" to="/phase5">
                    Phase 5
                </NavLink>
            </nav>
            <Search handleSearch={handleSearch} search={search}/>
            
        </>
        
        



)}

export default Header;