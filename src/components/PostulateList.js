import React from "react";

import {useGetPostulates} from "../useRequest";
import {Link} from "react-router-dom";

const PostulateListItem = ({postulate}) => {
    const {partNumber, itemNumber, text} = postulate;

    return (
        <article className="Article">
            <h3>Partie {partNumber} - Postulate {itemNumber}</h3>
            <p>{text}</p>
            <Link to={`/postulate/${partNumber}/${itemNumber}`}>Read more &rarr;</Link>
        </article>
    )
};

export default function PostulateList() {
    const {data, error, isLoading, isSuccess} = useGetPostulates();

    if (error) return <h1>Something went wrong!!!</h1>
    if (isLoading) return <h1>Loading...</h1>

    return (
        <div>{
            isSuccess && data.postulates.map(
                (postulate) => <PostulateListItem key={postulate.name} postulate={postulate}/>
            )
        }</div>
    )
}