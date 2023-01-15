import React from "react";
import {useGetPreface} from "../useRequest";
import {useParams} from "react-router-dom";
import EthicItem from "./EthicItem";

export default function Preface() {
    const {partNumber, itemNumber} = useParams();
    const {data, error, isLoading, isSuccess} = useGetPreface(partNumber, itemNumber);

    if (error) return <h1>Something went wrong!!!</h1>
    if (isLoading) return <h1>Loading...</h1>

    let preface = data.preface;
    let references = preface.references;

    return (
        isSuccess && (
            <article className="Article">
                <h1>Preface</h1>
                <p>{preface.text}</p>
                { (references != null) &&
                    <div>
                        <br/>
                        {
                            (!Array.isArray(references) && typeof (references) === 'object') && (
                                <div>{<EthicItem key={references.uri} uri={references.uri}/>}</div>
                            )
                        }
                        {
                            (Array.isArray(references) ) && (
                                <div>{references.map((item) => <EthicItem key={item.uri} uri={item.uri}/>)}</div>
                            )
                        }
                    </div>
                }
            </article>
        )
    )
}