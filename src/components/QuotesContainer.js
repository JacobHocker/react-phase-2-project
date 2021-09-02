import React, { useState, useEffect } from 'react';
import QuotesList from "./QuotesList";
import Search from "./Search";


function QuotesContainer() {
    const [quotes, setQuotes] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
  
    
    useEffect(() => {
        fetch("http://localhost:3001/quotes")
        .then((r) => r.json())
        .then(setQuotes)
    }, [])

   /* function handleAddQuote(newQuote) {
        const updatedQuote = [...quotes, newQuote]
        setQuotes(updatedQuote)
    }*/

   

    const quotesToDisplay = quotes.filter((quote) => 
    quote.character.toLowerCase().includes(searchTerm.toLowerCase()))

    return(
        <div className="quote-container">
            <img  src="./images/quotes.png" alt="quotes" ></img>
            <h3>Here in the quotes section you can view</h3>
            <Search searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
            <QuotesList quotes={quotesToDisplay} />
            {/*<SubmitQuote onAddQuote={handleAddQuote} />*/}
        </div>

    )
}

export default QuotesContainer;