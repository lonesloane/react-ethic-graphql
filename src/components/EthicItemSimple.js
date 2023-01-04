import React from "react";
import EthicItem from "./EthicItem";

export default function EthicItemSimple({item}) {
    const {name, type, text, references, descendants} = item;

    return (
        <article className="Article">
            <h3>{name}</h3>
            <p>{type}</p>
            <p>{text}</p>
            { (references != null) &&
                <>
                <br/>
                <div>
                    {
                        (!Array.isArray(references) && typeof (references) === 'object') && (
                            <div>{<EthicItem key={references.name} item={references}/>}</div>
                        )
                    }
                    {
                        (Array.isArray(references) ) && (
                            <div>{references.map((item) => <EthicItem key={item.name} item={item}/>)}</div>
                        )
                    }
                </div>
                </>
            }
            { (descendants != null) &&
                <>
                    <br/>
                    <div>
                        {
                            (!Array.isArray(descendants) && typeof (descendants) === 'object') && (
                                <div>{<EthicItem key={descendants.name} item={descendants}/>}</div>
                            )
                        }
                        {
                            (Array.isArray(descendants) ) && (
                                <div>{descendants.map((item) => <EthicItem key={item.name} item={item}/>)}</div>
                            )
                        }
                    </div>
                </>
            }
        </article>
    )
}