import React from "react";
import {useParams} from "react-router-dom";
import {useGetAffectionDefinition} from "../useRequest";
import SubItems from "./SubItems";

export default function AffectionDefinition() {
    const {partNumber, itemNumber} = useParams();
    const {data, error, isLoading, isSuccess} = useGetAffectionDefinition(partNumber, itemNumber);

    if (error) return <h1>Something went wrong!!!</h1>
    if (isLoading) return <h1>Loading...</h1>

    let affectionDefinition = data.affectionDefinition;
    let references = affectionDefinition.references;
    let descendants = affectionDefinition.descendants;

    return (
        isSuccess && (
            <article className="Article">
                <h1>Partie {partNumber} - Affection Definition: {itemNumber}</h1>
                <p>{affectionDefinition.text}</p>
                { <SubItems references={references} descendants={descendants} /> }
            </article>
        )
    )
}