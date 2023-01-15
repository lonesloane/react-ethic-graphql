import React from "react";

import {useGetAffectionDefinitions} from "../useRequest";
import {Link} from "react-router-dom";

const AffectionDefinitionListItem = ({affectionDefinition}) => {
    const {partNumber, itemNumber, text} = affectionDefinition;

    return (
        <article className="Article">
            <h3>Partie {partNumber} - Affection Definition {itemNumber}</h3>
            <p>{text}</p>
            <Link to={`/affection-definition/${partNumber}/${itemNumber}`}>Read more &rarr;</Link>
        </article>
    )
};

export default function AffectionDefinitionList() {
    const {data, error, isLoading, isSuccess} = useGetAffectionDefinitions();

    if (error) return <h1>Something went wrong!!!</h1>
    if (isLoading) return <h1>Loading...</h1>

    return (
        <div>{
            isSuccess && data.affectionDefinitions.map(
                (affectionDefinition) => <AffectionDefinitionListItem key={affectionDefinition.name} affectionDefinition={affectionDefinition}/>
            )
        }</div>
    )
}