import React from "react";

import {useGetDefinitions} from "../useRequest";
import {Link} from "react-router-dom";
import {IEthicItem} from "../EthicTypes";

interface IDefinitionListItem {
    definition: IEthicItem;
}

const DefinitionListItem = ({definition}: IDefinitionListItem) => {
    const {partNumber, itemNumber, text} = definition;

    return (
        <article className="Article">
            <h3>Partie {partNumber} - Definition {itemNumber}</h3>
            <p>{text}</p>
            <Link to={`/definition/${partNumber}/${itemNumber}`}>Read more &rarr;</Link>
        </article>
    )
};

export default function DefinitionList() {
    const {data, error, isLoading, isSuccess} = useGetDefinitions();

    if (error) return <h1>Something went wrong!!!</h1>
    if (isLoading) return <h1>Loading...</h1>

    return (
        <div>{
            isSuccess && data.definitions.map(
                (definition: IEthicItem) => <DefinitionListItem key={definition.name} definition={definition}/>
            )
        }</div>
    )
}