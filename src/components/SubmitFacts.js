import React, { useState } from 'react';

function SubmitFacts({ onAddFacts }) {
    const [fact, setFact] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        fetch("http://localhost:3001/facts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fact: fact,
            }),
        })
        .then((r) => r.json())
        .then((newFact) => onAddFacts(newFact))
    }
    return(
        <div className='submit-fact'>
            <img src='./images/submit-a-fact-1.png' alt='submit a fact' />
            <form onSubmit={handleSubmit}>
                <div className='facts-input'>
                    <textarea
                        className='submit-fact-area'
                        name="fact"
                        type='text'
                        placeholder='Write the fact here'
                        rows={10}
                        value={fact}
                        onChange={(event) => setFact(event.target.value)}
                    />
                </div>
                <button className='button' type='submit'>
                    Submit Fact!
                </button>
            </form>
        </div>

    )
}

export default SubmitFacts