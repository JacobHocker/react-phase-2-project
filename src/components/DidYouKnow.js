import React, { useState, useEffect } from 'react';
import Facts from "./Facts"
import SubmitFacts from './SubmitFacts';

function DidYouKnow() {
    const [facts, setFacts] = useState([])
    const [oneFact, setOneFact] = useState("")
   
    useEffect(() => {
        fetch("http://localhost:3001/facts")
        .then((r) => r.json())
        .then(setFacts)
    },[])

    const handleClick = () => {
        const random = facts[Math.floor(Math.random() * facts.length)];
        setOneFact(random)
    }

   
    function handleAddFact(newFact) {
        const updatedFacts = [...facts, newFact]
        setFacts(updatedFacts)
    }
    
   

    return(
        <div className='did-you-know'>
            <img src='./images/did-you-know.png' alt='did you know' />
            <p>There are many fun an interesting facts in the world of Middle Earth.</p>
            <p>Whether it's about the books, movies, or the author himself!</p>
            <p>Displayed below is a random fun fact about anything within the realm of Middle Earth!</p>
            <p>To start click the 'Did You Know?' button!</p>
            <Facts onHandleClick={handleClick} fact={oneFact.fact} />
            <SubmitFacts onAddFacts={handleAddFact} />
        </div>

    )
}

export default DidYouKnow;