
import React from "react";

import {useGetAxioms} from "../useRequest";
import {Link} from "react-router-dom";
import {IEthicItem} from "../EthicTypes";

interface IAxiomListItem {
    axiom: IEthicItem;
}

const AxiomListItem = ({axiom}: IAxiomListItem) => {
    const {partNumber, itemNumber, text} = axiom;

    return (
        <article className="Article">
            <h3>Partie {partNumber} - Axiom {itemNumber}</h3>
            <p>{text}</p>
            <Link to={`/axiom/${partNumber}/${itemNumber}`}>Read more &rarr;</Link>
        </article>
    )
};

export default function AxiomList() {
    const {data, error, isLoading, isSuccess} = useGetAxioms();

    if (error) return <h1>Something went wrong!!!</h1>
    if (isLoading) return <h1>Loading...</h1>

    return (
        <div>{
            isSuccess && data.axioms.map(
                (axiom:IEthicItem) => <AxiomListItem key={axiom.name} axiom={axiom}/>
            )
        }</div>
    )
}