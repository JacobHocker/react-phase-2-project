import React from "react";

function Search({ searchTerm, onChangeSearch }) {

    function handleChange(event) {
        onChangeSearch(event.target.value)
    }
    return(
        <div className="search-bar">
            <input
            type="text"
            placeholder='Search By Character'
            value={searchTerm}
            onChange={handleChange}
            />
        </div>

    )
}

export default Search;