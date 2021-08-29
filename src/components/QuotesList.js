import React from 'react';
import Quotes from "./Quotes"

function QuotesList() {
    return(
        <table className="quotes-table">
            <tbody>
                <tr>
                    <th>
                    <h3 className="ui center aligned header">Character:</h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header">Quote:</h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header">Movie:</h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header">Edit:</h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header">Delete:</h3>
                    </th>
                </tr>
                <Quotes />
            </tbody>
        </table>
    )
}

export default QuotesList;