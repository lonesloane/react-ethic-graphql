import React from "react";
import {Link} from "react-router-dom";

export default function Proposition({proposition}) {
    const {partNumber, itemNumber, name, text} = proposition;

    return (
        <article className="Proposition">
            <h1>{name}</h1>
            <p>{text}</p>
            <Link to={`/proposition/${partNumber}/${itemNumber}`}>Read more &rarr;</Link>
        </article>
    )
}