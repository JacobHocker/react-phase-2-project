import React from 'react';

function Facts({ fact, onHandleClick }) {

    return(
        <div className='fact-display'>
            <button className='button' onClick={onHandleClick}>Did You Know?</button>
            <h2>Did you know...</h2>
            <h2>{fact}</h2>
            <button className='button' onClick={onHandleClick}>Get New Fact!</button>
        </div>
    )
}

export default Facts