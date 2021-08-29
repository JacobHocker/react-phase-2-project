import React from 'react';
import QuotesList from "./QuotesList"

function QuotesContainer() {
    return(
        <div className="quote-container">
            <img src="./images/quotes.png" alt="quotes"></img>
            <QuotesList />
        </div>

    )
}

export default QuotesContainer;