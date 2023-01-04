import React from "react";
import {useParams} from "react-router-dom";
import {useGetProposition} from "../useRequest";
import EthicItem from "./EthicItem";

export default function PropositionTemplate() {
    const {partNumber, itemNumber} = useParams();
    const {data, error, isLoading, isSuccess} = useGetProposition(partNumber, itemNumber);

    if (error) return <h1>Something went wrong!!!</h1>
    if (isLoading) return <h1>Loading...</h1>

    return (
        isSuccess && (
            <article className="Article">
                <h1>Partie {partNumber} - Proposition: {itemNumber}</h1>
                <p>{data.proposition.text}</p>
                { (data.proposition.references != null) &&
                    <div>
                        <br/>
                        {
                            (!Array.isArray(data.proposition.references) && typeof (data.proposition.references) === 'object') && (
                                <div>{<EthicItem key={data.proposition.references.uri} uri={data.proposition.references.uri}/>}</div>
                            )
                        }
                        {
                            (Array.isArray(data.proposition.references) ) && (
                                <div>{data.proposition.references.map((item) => <EthicItem key={item.uri} uri={item.uri}/>)}</div>
                            )
                        }
                    </div>
                }
                { (data.proposition.descendants != null) &&
                    <div>
                        <br/>
                        {
                            (!Array.isArray(data.proposition.descendants) && typeof (data.proposition.descendants) === 'object') && (
                                <div>{<EthicItem key={data.proposition.descendants.uri} uri={data.proposition.descendants.uri}/>}</div>
                            )
                        }
                        {
                            (Array.isArray(data.proposition.descendants) ) && (
                                <div>{data.proposition.descendants.map((item) => <EthicItem key={item.uri} uri={item.uri}/>)}</div>
                            )
                        }
                    </div>
                }
            </article>
        )
    )
}