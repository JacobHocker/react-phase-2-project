import React from "react";

function Home() {
    return(
        <div className="home">
            <h1>Welcome to</h1>
            <img 
            className="title"
            src="./images/lore-of-the-rings-title.png" 
            alt="Lore Of The Rings"
           />
           <h3>
               This is a place where you can find all your favorite quotes from 
                the Lord Of The Rings and The Hobbit movie franchises!
           </h3>
            <h3>You can also discover facts about the movies, books, characters, and the author
               himself J. R. R. Tolkien!
            </h3>
        </div>
    )
};

export default Home;