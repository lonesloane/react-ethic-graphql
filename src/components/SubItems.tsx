import React from "react";
import EthicItem from "./EthicItem";
import {ISubItem} from "../EthicTypes";

type SubItemParams = {
    references: ISubItem | [ISubItem];
    descendants: ISubItem | [ISubItem];
};

export default function SubItems({references, descendants}: SubItemParams) {

    const displaySubItem = (subItem: ISubItem) => {
        return (<EthicItem key={subItem.uri} uri={subItem.uri}/>)
    };

    const displaySubItems = (subItems: ISubItem | [ISubItem]) => {
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