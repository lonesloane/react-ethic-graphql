import React from "react";
import {useParams} from "react-router-dom";
import {useGetProposition} from "../useRequest";
import SubItems from "./SubItems";

export default function Proposition() {
    const {partNumber, itemNumber} = useParams();
    const {data, error, isLoading, isSuccess} = useGetProposition(Number(partNumber), Number(itemNumber));

    if (error) return <h1>Something went wrong!!!</h1>
    if (isLoading) return <h1>Loading...</h1>

    let proposition = data.proposition;
    let references = proposition.references;
    let descendants = proposition.descendants;

    if (isSuccess) {
        return <article className="Article">
            <h1>Partie {partNumber} - Proposition: {itemNumber}</h1>
            <p>{proposition.text}</p>
            {<SubItems references={references} descendants={descendants}/>}
        </article>
    } else {
        return <h1>Loading...</h1>
    }
}