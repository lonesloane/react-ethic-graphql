import React from "react";
import {useParams} from "react-router-dom";
import {useGetAxiom} from "../useRequest";
import SubItems from "./SubItems";
import {IEthicItem} from "../EthicTypes";

export default function Axiom() {
    const {partNumber, itemNumber} = useParams();
    const {data, error, isLoading, isSuccess} = useGetAxiom(Number(partNumber), Number(itemNumber));

    if (error) return <h1>Something went wrong!!!</h1>
    if (isLoading) return <h1>Loading...</h1>

    let axiom = data.axiom as IEthicItem;
    let references = axiom.references;
    let descendants = axiom.descendants;


    if (isSuccess) {
        return <article className="Article">
            <h1>Partie: {partNumber} - Axiom: {itemNumber}</h1>
            <p>{axiom.text}</p>
            {<SubItems references={references} descendants={descendants}/>}
        </article>
    } else {
        return <h1>Loading...</h1>
    }
}