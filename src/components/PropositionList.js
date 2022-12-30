import React from "react";

import {useGetPropositions} from "../useRequest";
import Proposition from "./Proposition";

export default function PropositionList() {
    const {data, error, isLoading, isSuccess} = useGetPropositions();

    if (error) return <h1>Something went wrong!!!</h1>
    if (isLoading) return <h1>Loading...</h1>

    return (
        <div>{
            isSuccess && data.propositions.map((proposition) => <Proposition key={proposition.name} proposition={proposition}/>)
        }</div>
    )
}