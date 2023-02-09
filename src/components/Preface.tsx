import React from "react";
import {useGetPreface} from "../useRequest";
import {useParams} from "react-router-dom";
import EthicItem from "./EthicItem";
import {IEthicItem} from "../EthicTypes";

export default function Preface() {
    const {partNumber, itemNumber} = useParams();
    const {data, error, isLoading, isSuccess} = useGetPreface(Number(partNumber), Number(itemNumber));

    if (error) return <h1>Something went wrong!!!</h1>
    if (isLoading) return <h1>Loading...</h1>

    let preface = data.preface as IEthicItem;
    let references = preface.references;

    if (isSuccess) {
        return <article className="Article">
            <h1>Preface</h1>
            <p>{preface.text}</p>
            {(references != null) &&
                <div>
                    <br/>
                    {
                        (!Array.isArray(references) && typeof (references) === 'object') && (
                            <div>{<EthicItem key={references.uri} uri={references.uri}/>}</div>
                        )
                    }
                    {
                        (Array.isArray(references)) && (
                            <div>{references.map((item) => <EthicItem key={item.uri} uri={item.uri}/>)}</div>
                        )
                    }
                </div>
            }
        </article>
    } else {
        return <h1>Loading...</h1>
    }
}