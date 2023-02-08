import React from "react";
import EthicItem from "./EthicItem";

type Item = {
    uri: string;
};

type SubItemParams = {
    references: [Item];
    descendants: [Item];
};

export default function SubItems({references, descendants}: SubItemParams) {

    const displaySubItem = (subItem: Item) => {
        return (<EthicItem key={subItem.uri} uri={subItem.uri}/>)
    };

    const displaySubItems = (subItems: [Item]) => {
        return (
            (subItems != null) &&
            <div>
                {!Array.isArray(subItems) && typeof (subItems) === 'object' && displaySubItem(subItems)}
                {Array.isArray(subItems) && subItems.map((item) => displaySubItem(item))}
            </div>
        )
    };

    return (
        <>
            <>{displaySubItems(references)}</>
            <>{displaySubItems(descendants)}</>
        </>
    )
}