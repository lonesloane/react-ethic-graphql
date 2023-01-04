import React from "react";
import {useGetItem} from "../useRequest";

export default function EthicItemRecursive({uri}) {
    const {data, error, isLoading, isSuccess} = useGetItem(uri);

    if (error) return <h1>Something went wrong!!!</h1>
    if (isLoading) return <h1>Loading...</h1>

    return (
        isSuccess && (
        <article className="Article">
            <h3>{data.ethicItem.name}</h3>
            <p>{data.ethicItem.type}</p>
            <p>{data.ethicItem.text}</p>
            { (data.ethicItem.references != null) &&
                <>
                <br/>
                <div>
                    {
                        (!Array.isArray(data.ethicItem.references) && typeof (data.ethicItem.references) === 'object') && (
                            <div>{<EthicItemRecursive key={data.ethicItem.references.uri} uri={data.ethicItem.references.uri}/>}</div>
                        )
                    }
                    {
                        (Array.isArray(data.ethicItem.references) ) && (
                            <div>{data.ethicItem.references.map((item) => <EthicItemRecursive key={item.uri} uri={item.uri}/>)}</div>
                        )
                    }
                </div>
                </>
            }
            { (data.ethicItem.descendants != null) &&
                <>
                    <br/>
                    <div>
                        {
                            (!Array.isArray(data.ethicItem.descendants) && typeof (data.ethicItem.descendants) === 'object') && (
                                <div>{<EthicItemRecursive key={data.ethicItem.descendants.uri} uri={data.ethicItem.descendants.uri}/>}</div>
                            )
                        }
                        {
                            (Array.isArray(data.ethicItem.descendants) ) && (
                                <div>{data.ethicItem.descendants.map((item) => <EthicItemRecursive key={item.uri} uri={item.uri}/>)}</div>
                            )
                        }
                    </div>
                </>
            }
        </article>
        )
    )
}