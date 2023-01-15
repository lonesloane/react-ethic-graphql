import EthicItem from "./EthicItem";

export default function SubItems({references, descendants}) {

    const displaySubItem = (subItem) => {
        return (<EthicItem key={subItem.uri} uri={subItem.uri}/>)
    };

    const displaySubItems = (subItems) => {
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