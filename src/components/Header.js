import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";



function Header() {

    return(
        <header>
            <nav>
                <Link to="/phase1">
                    <h1 className="header">//Flatsource</h1>
                </Link>

            <div className="navigation">
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
            <Search />
            </div>
            </nav>
        </header>
        
        



)}

export default Header;