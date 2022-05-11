import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";



function Header() {

    return(
        <>          
                <div className="header" >
                    <h1>//Flatsource</h1>
                </div>

            <nav className="navigation">
                <Link className="button" to="/phase1">
                    Phase 1
                </Link>
                <Link className="button" to="/phase2">
                    Phase 2
                </Link>
                <Link className="button" to="/phase3">
                    Phase 3
                </Link>
                <Link className="button" to="/phase4">
                    Phase 4
                </Link>
                <Link className="button" to="/phase5">
                    Phase 5
                </Link>
            </nav>
            <Search />
            
        </>
        
        



)}

export default Header;