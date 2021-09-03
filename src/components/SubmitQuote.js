import React,{ useState } from 'react';

function SubmitQuote({ onAddQuote }) {
    const [character, setCharacter] = useState("")
    const [image, setImage] = useState("")
    const [quote, setQuote] = useState("")
    const [movie, setMovie] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        fetch("http://localhost:3001/quotes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                character: character,
                image: image,
                quote: quote,
                movie: movie,
            }),
        })
        .then((r) => r.json())
        .then((newQuote) => onAddQuote(newQuote))
    }


    return(
        <div className='submit-quote'>
            <img src='./images/submit-a-quote.png' alt='submit a quote' />
            <form onSubmit={handleSubmit}>
                <div className='quote-inputs'>
                    <input
                        type="text"
                        placeholder='Character Name'
                        name="Character"
                        value={character}
                        onChange={(event) => setCharacter(event.target.value)}
                    />
                    <input
                        type="text"
                        placeholder='Image Url'
                        name="Image"
                        value={image}
                        onChange={(event) => setImage(event.target.value)}
                    />
                    <input
                        type="text"
                        name="Movie"
                        placeholder='Movie title'
                        value={movie}
                        onChange={(event) => setMovie(event.target.value)}
                    />
                    <textarea
                        className='submit-quote-area'
                        name="quote"
                        type="text"
                        placeholder='Write the quote here...'
                        rows={10}
                        value={quote}
                        onChange={(event) => setQuote(event.target.value)}
                    />
                 </div>
                 <button className='button' type="submit">
                     Submit Quote!
                 </button>
            </form>
        </div>

    )
}

export default SubmitQuote;