import React, { useState, useEffect } from 'react';
import QuotesList from "./QuotesList"

function QuotesContainer() {
    const [quotes, setQuotes] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    
    useEffect(() => {
        fetch("http://localhost:3001/quotes")
        .then((r) => r.json())
        .then(setQuotes)
    }, [])

    //const quotesToDisplay = quotes.filter((quote) => 
   // quote.character.toLowerCase().includes())

    return(
        <div className="quote-container">
            <img  src="./images/quotes.png" alt="quotes"></img>
            <QuotesList quotes={quotes} />
        </div>

    )
}

export default QuotesContainer;