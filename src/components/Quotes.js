import React from 'react';


function Quotes({ quotes }) {
    const {  image, character, quote, movie } = quotes

    

    return(
        <tr>
            <td>{character}</td>
            <td>{quote}</td>
            <td>{movie}</td>
            <td>
                <img className="table-image" src={image} alt={character} />
            </td>
            <td>
                <button>Edit</button>
            </td>
            <td>
                <button>Delete</button>
            </td>
        </tr>
    )
}

export default Quotes;