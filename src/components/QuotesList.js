import React from 'react';
import Quotes from "./Quotes"

function QuotesList() {
    return(
        <table className="quotes-table">
            <tbody>
                <tr>
                    <th>
                        <h3>Character:</h3>
                    </th>
                    <th>
                        <h3>Quote:</h3>
                    </th>
                    <th>
                        <h3>Movie:</h3>
                    </th>
                    <th>
                        <h3>Edit:</h3>
                    </th>
                    <th>
                        <h3>Delete:</h3>
                    </th>
                </tr>
                <Quotes />
            </tbody>
        </table>
    )
}

export default QuotesList;