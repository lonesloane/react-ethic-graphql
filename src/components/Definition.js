import React from "react";
import {useParams} from "react-router-dom";
import {useGetDefinition} from "../useRequest";
import SubItems from "./SubItems";

export default function Definition() {
    const {partNumber, itemNumber} = useParams();
    const {data, error, isLoading, isSuccess} = useGetDefinition(partNumber, itemNumber);

    if (error) return <h1>Something went wrong!!!</h1>
    if (isLoading) return <h1>Loading...</h1>

    let definition = data.definition;
    let references = definition.references;
    let descendants = definition.descendants;

    return (
        isSuccess && (
            <article className="Article">
                <h1>Partie {partNumber} - Definition: {itemNumber}</h1>
                <p>{definition.text}</p>
                { <SubItems references={references} descendants={descendants} /> }
            </article>
        )
    )
}