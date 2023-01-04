import {useState} from "react";
import {useParams} from "react-router-dom";
import {useGetItem} from "../useRequest";

export default function EthicItem({uri}) {
    const [items, setItems] = useState([]);
    const {name} = useParams();
    let uriVariable = null != uri ? uri : "http://ethica.graph.ql/"+name;
    const {data, error, isLoading, isSuccess} = useGetItem(uriVariable);

    const openItem = (name) => {
        const newItems = items.concat([name]);
        setItems(newItems);
    };

    const closeItem = (name) => {
        const newItems = items.filter(
            (item) => item !== name
        );
        setItems(newItems);
    };

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
                                    { items.includes(references.name) ? (
                                        <div>{
                                            <>
                                                <br/>
                                                <button onClick={() => closeItem(references.name)}>Close {references.name}</button>
                                                <EthicItem key={references.uri} uri={references.uri}/>
                                            </>
                                        }</div>
                                        ) : (
                                            <>
                                                <br/>
                                                <button onClick={() => openItem(references.name)}>{references.name} &rarr;</button>
                                            </>
                                        )
                                    }
                                </>
                            )
                        }
                        {
                            (Array.isArray(references) ) && (
                                <div>{references.map((item) => (
                                <>
                                    { items.includes(item.name) ? (
                                        <div>{
                                            <>
                                                <br/>
                                                <button onClick={() => closeItem(item.name)}>Close {item.name}</button>
                                                <EthicItem key={item.uri} uri={item.uri}/>
                                            </>
                                        }</div>
                                    ) : (
                                        <>
                                            <br/>
                                            <button onClick={() => openItem(item.name)}>{item.name} &rarr;</button>
                                        </>
                                    )
                                    }
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