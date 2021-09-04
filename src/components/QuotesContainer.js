import React, { useState, useEffect } from 'react';
import QuotesList from "./QuotesList";
import Search from "./Search";
import SubmitQuote from './SubmitQuote';


function QuotesContainer() {
    const [quotes, setQuotes] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
  
    
    useEffect(() => {
        fetch("http://localhost:3001/quotes")
        .then((r) => r.json())
        .then(setQuotes)
    }, [])

    function handleAddQuote(newQuote) {
        const updatedQuote = [...quotes, newQuote]
        setQuotes(updatedQuote)
    }

   function handleDeleteQuote(id) {
       const updatedQuotes = quotes.filter((quote) => 
       quote.id !== id)
       setQuotes(updatedQuotes)
   }

    const quotesToDisplay = quotes.filter((quote) => 
    quote.character.toLowerCase().includes(searchTerm.toLowerCase()))

    return(
        <section className="quote-container">
            <img  src="./images/quotes-1.png" alt="quotes" ></img>
            <img src='./images/moria-gates.jpg' alt='gates of moria' className='moria' />
            <h3>Here you can view, delete ,and submit quotes from</h3>
            <h3>The Lord Of The Rings and The Hobbit trilogies!</h3>
            <Search searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
            <QuotesList quotes={quotesToDisplay} onDeleteQuote={handleDeleteQuote} />
            <SubmitQuote onAddQuote={handleAddQuote} />
        </section>

    )
}

export default QuotesContainer;