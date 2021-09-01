import React from 'react';
import Quotes from "./Quotes"

function QuotesList({ quotes, onHandleClick }) {
    const quoteList = quotes.map((quote) => (
        <Quotes
        key={quote.id}
        quotes={quote}
        onHandleClick={onHandleClick}
        />

    ))
    return(
        <table className="quotes-table">
            <tbody>
                <tr>
                    <th>
                        <h3>Character:</h3>
                    </th>
                    <th>
                        <h3>Quote:</h3>
                    </th>
                    <th>
                        <h3>Movie:</h3>
                    </th>
                    <th>
                        <h3>Image:</h3>
                    </th>
                    <th>
                        <h3>Edit:</h3>
                    </th>
                    <th>
                        <h3>Delete:</h3>
                    </th>
                </tr>
                {quoteList}
            </tbody>
        </table>
    )
}

export default QuotesList;