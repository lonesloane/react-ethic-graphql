import React from "react";
import {useParams} from "react-router-dom";
import {useGetPostulate} from "../useRequest";
import SubItems from "./SubItems";
import {IEthicItem} from "../EthicTypes";

export default function Postulate() {
    const {partNumber, itemNumber} = useParams();
    const {data, error, isLoading, isSuccess} = useGetPostulate(Number(partNumber), Number(itemNumber));

    if (error) return <h1>Something went wrong!!!</h1>
    if (isLoading) return <h1>Loading...</h1>

    let postulate = data.postulate as IEthicItem;
    let references = postulate.references;
    let descendants = postulate.descendants;

    if (isSuccess) {
        return <article className="Article">
            <h1>Partie {partNumber} - Postulate: {itemNumber}</h1>
            <p>{postulate.text}</p>
            {<SubItems references={references} descendants={descendants}/>}
        </article>
    } else {
        return <h1>Loading...</h1>
    }
}