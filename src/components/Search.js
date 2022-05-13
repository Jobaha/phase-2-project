import React from "react";

function Search ({ handleSearch, search }) {

    return(
        
        <form className="form">
            <input 
                placeholder="Search here..."
                onChange={e => handleSearch(e)}
                value={search}
                >    
            </input>
            <button>search</button>
        </form>
    )
}

export default Search;

