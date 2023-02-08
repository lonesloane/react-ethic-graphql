import React, {ReactElement} from "react";
import {useState} from "react";
import {useParams} from "react-router-dom";
import {useGetItem} from "../useRequest";

type EthicItemType = {
    name: string;
    uri: string;
};

type EthicItemParams = {
    name?: string;
    uri?: string;
};

export default function EthicItem({uri}: EthicItemParams) :ReactElement {
    const [openItems, setOpenItems] = useState<string[]>([]);
    const {name} = useParams<EthicItemParams>();
    let uriVariable = null != uri ? uri : "http://ethica.graph.ql/" + name;
    const {data, error, isLoading, isSuccess} = useGetItem(uriVariable);

    const openItem = (name: string) => {
        const newItems = openItems.concat([name]);
        setOpenItems(newItems);
    };

    const closeItem = (name: string) => {
        const newItems = openItems.filter(
            (item) => item !== name
        );
        setOpenItems(newItems);
    };

    const displaySubItem = (subItem: EthicItemType) => {
        return (
            openItems.includes(subItem.name) ? (
                <div>
                    <br/>
                    <button onClick={() => closeItem(subItem.name)}>Close {subItem.name}</button>
                    <EthicItem key={subItem.uri} uri={subItem.uri}/>
                </div>
            ) : (
                <div>
                    <br/>
                    <button onClick={() => openItem(subItem.name)}>{subItem.name} &rarr;</button>
                </div>
            )
        )
    };

    const displaySubItems = (subItems: [EthicItemType]) => {
        return (
            (subItems != null) &&
            <div>
                {!Array.isArray(subItems) && typeof (subItems) === 'object' && displaySubItem(subItems)}
                {Array.isArray(subItems) && subItems.map((item) => displaySubItem(item))}
            </div>
        )
    };

    if (error) return <h1>Something went wrong!!!</h1>
    if (isLoading) return <h1>Loading...</h1>

    let ethicItem = data.ethicItem;
    let references = ethicItem.references;
    let descendants = ethicItem.descendants;

    if (isSuccess){
        return <article className="Article">
            <h3>{ethicItem.name}</h3>
            <p>{ethicItem.type}</p>
            <p>{ethicItem.text}</p>
            {displaySubItems(references)}
            {displaySubItems(descendants)}
        </article>
    } else {
        return <article className="Article"><h3>Loading...</h3></article>
    }
}