import React from 'react';

function Facts({ fact, onHandleClick }) {

    return(
        <div className='fact-display'>
            <strong>Did you know...</strong>
            <h2>{fact}</h2>
            <button onClick={onHandleClick}>New Fact</button>
        </div>
    )
}

export default Facts