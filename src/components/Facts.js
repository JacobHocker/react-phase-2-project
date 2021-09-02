import React from 'react';

function Facts({ fact }) {

    return(
        <div className='fact-display'>
            <strong>Did you know...</strong>
            <h2>{fact}</h2>
        </div>
    )
}

export default Facts