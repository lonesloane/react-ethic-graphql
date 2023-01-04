import React from "react";
import {useParams, Link} from "react-router-dom";
import {useGetItem} from "../useRequest";

export default function EthicItem({uri}) {
    const {name} = useParams();
    let uriVariable = null != uri ? uri : "http://ethica.graph.ql/"+name;
    const {data, error, isLoading, isSuccess} = useGetItem(uriVariable);

    if (error) return <h1>Something went wrong!!!</h1>
    if (isLoading) return <h1>Loading...</h1>

    let ethicItem = data.ethicItem;
    let references = ethicItem.references;
    let descendants = ethicItem.descendants;

    return (
        isSuccess && (
            <article className="Article">
                <h3>{ethicItem.name}</h3>
                <p>{ethicItem.type}</p>
                <p>{ethicItem.text}</p>
                { (references != null) &&
                    <div>
                        {
                            (!Array.isArray(references) && typeof (references) === 'object') && (
                                <>
                                    <br/>
                                    <Link key={references.name} to={`/ethicItem/${references.name}`}>{references.name} &rarr;</Link>
                                </>
                            )
                        }
                        {
                            (Array.isArray(references) ) && (
                                <div>{references.map((item) => (
                                <>
                                    <br/>
                                    <Link key={item.name} to={`/ethicItem/${item.name}`}>{item.name} &rarr;</Link>
                                </>
                                ))}</div>
                            )
                        }
                    </div>
                }
                { (descendants != null) &&
                    <div>
                        {
                            (!Array.isArray(descendants) && typeof (descendants) === 'object') && (
                                <>
                                    <br/>
                                    <div>{<EthicItem key={descendants.uri} uri={descendants.uri}/>}</div>
                                </>
                            )
                        }
                        {
                            (Array.isArray(descendants) ) && (
                                <div>{descendants.map((item) => <EthicItem key={item.uri} uri={item.uri}/>)}</div>
                            )
                        }
                    </div>
                }
            </article>
        )
    )
}