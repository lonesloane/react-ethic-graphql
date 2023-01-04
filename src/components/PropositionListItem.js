import React from "react";
import {Link} from "react-router-dom";

export default function PropositionListItem({proposition}) {
    const {partNumber, itemNumber, text} = proposition;

    return (
        <article className="Article">
            <h3>Partie {partNumber} - Proposition {itemNumber}</h3>
            <p>{text}</p>
            <Link to={`/proposition/${partNumber}/${itemNumber}`}>Read more &rarr;</Link>
        </article>
    )
}