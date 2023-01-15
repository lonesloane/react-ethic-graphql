import React from "react";

import {useGetPropositions} from "../useRequest";
import {Link} from "react-router-dom";

const PropositionListItem = ({proposition}) => {
    const {partNumber, itemNumber, text} = proposition;

    return (
        <article className="Article">
            <h3>Partie {partNumber} - Proposition {itemNumber}</h3>
            <p>{text}</p>
            <Link to={`/proposition/${partNumber}/${itemNumber}`}>Read more &rarr;</Link>
        </article>
    )
};

export default function PropositionList() {
    const {data, error, isLoading, isSuccess} = useGetPropositions();

    if (error) return <h1>Something went wrong!!!</h1>
    if (isLoading) return <h1>Loading...</h1>

    return (
        <div>{
            isSuccess && data.propositions.map(
                (proposition) => <PropositionListItem key={proposition.name} proposition={proposition}/>
            )
        }</div>
    )
}