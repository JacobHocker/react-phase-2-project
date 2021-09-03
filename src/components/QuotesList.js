import React from 'react';
import Quotes from "./Quotes"

function QuotesList({ quotes, onDeleteQuote }) {
    const quoteList = quotes.map((quote) => (
        <Quotes
        key={quote.id}
        quotes={quote}
        onDeleteQuote={onDeleteQuote}
        />

    ))
    return(
        <table className="quotes-table">
            <tbody>
                <tr>
                    <th>
                        <h3 className='table-header'>Character:</h3>
                    </th>
                    <th>
                        <h3 className='table-header'>Quote:</h3>
                    </th>
                    <th>
                        <h3 className='table-header'>Movie:</h3>
                    </th>
                    <th>
                        <h3 className='table-header'>Image:</h3>
                    </th>
                    <th>
                        <h3 className='table-header'>Delete:</h3>
                    </th>
                </tr>
                {quoteList}
            </tbody>
        </table>
    )
}

export default QuotesList;