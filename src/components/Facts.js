import React from 'react';

function Facts({ fact, onHandleClick }) {

    return(
        <section className='fact-display'>
            <div className='fact-button'>
                <button className='button' onClick={onHandleClick}>Did You Know?</button>
            </div>
            <h2 className='did-you-know-gold'>Did you know...</h2>
            <h2>{fact}</h2>
            <div className='fact-button'>
                <button className='button' onClick={onHandleClick}>Get New Fact!</button>
            </div>
        </section>
    )
}

export default Facts