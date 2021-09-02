import React from 'react';


function Quotes({ quotes, onDeleteQuote }) {
    const { id, image, character, quote, movie } = quotes

    function handleDeleteClick() {
        fetch(`http://localhost:3001/quotes/${id}`, {
            method: "DELETE",
        });
        onDeleteQuote(id)
    }
    

    return(
        <tr>
            <td>{character}</td>
            <td>{quote}</td>
            <td>{movie}</td>
            <td>
                <img className="table-image" src={image} alt={character} />
            </td>
            <td>
                <button className='edit-button'>Edit</button>
            </td>
            <td>
                <button className='delete-button' 
                onClick={handleDeleteClick}>Delete</button>
            </td>
        </tr>
    )
}

export default Quotes;