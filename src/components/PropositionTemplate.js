import React from "react";
import {useParams} from "react-router-dom";
import {useGetProposition} from "../useRequest";

export default function PropositionTemplate() {
    const {partNumber, itemNumber} = useParams();
    const {data, error, isLoading, isSuccess} = useGetProposition(partNumber, itemNumber);

    if (error) return <h1>Something went wrong!!!</h1>
    if (isLoading) return <h1>Loading...</h1>

    return (
        isSuccess && (
            <article className="Proposition">
                <h1>Proposition</h1>
                <h1>name: {data.proposition.name}</h1>
                <h4>type: {data.proposition.type}</h4>
                <p>text: {data.proposition.text}</p>
            </article>
        )
    )
}