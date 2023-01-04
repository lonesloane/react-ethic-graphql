import React from "react";

import {useGetPropositions} from "../useRequest";
import PropositionListItem from "./PropositionListItem";

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