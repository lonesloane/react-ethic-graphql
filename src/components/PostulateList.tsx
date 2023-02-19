import React from "react";

import {Accordion, AccordionSummary, AccordionDetails, Typography} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {useGetPostulates} from "../useRequest";
import {Link} from "react-router-dom";
import {IEthicItem} from "../EthicTypes";

interface IPostulateListItem {
    postulate: IEthicItem;
}

const PostulateListTitle = ({postulate}: IPostulateListItem) => {
    const {partNumber, itemNumber} = postulate;

    return (
        <Typography>
            Partie {partNumber} - Postulate {itemNumber}
        </Typography>
    )
};

const PostulateListItem = ({postulate}: IPostulateListItem) => {
    const {partNumber, itemNumber, text, references, descendants} = postulate;

    return (
        <Typography>
            <p>{text}</p>
            {
                (references || descendants) &&
                <Link to={`/postulate/${partNumber}/${itemNumber}`}>Read more &rarr;</Link>
            }
        </Typography>
    )
};

export default function PostulateList() {
    const [open, setOpen] = React.useState<string | false>(false);
    const accChange = (card: string) => (_e: React.SyntheticEvent, isOpen: boolean) => {
        setOpen(isOpen ? card : false);
    };

    const {data, error, isLoading, isSuccess} = useGetPostulates();

    if (error) return <h1>Something went wrong!!!</h1>
    if (isLoading) return <h1>Loading...</h1>

    return (
        <div>{
            isSuccess && data.postulates.map(
                (postulate: IEthicItem) =>
                    <Accordion
                        key={postulate.name}
                        expanded={open === postulate.name}
                        onChange={accChange(postulate.name)}
                    >
                        <AccordionSummary expandIcon={<ArrowDropDownIcon/>}>
                            <PostulateListTitle key={postulate.name} postulate={postulate}/>
                        </AccordionSummary>
                        <AccordionDetails>
                            <PostulateListItem key={postulate.name} postulate={postulate}/>
                        </AccordionDetails>
                    </Accordion>
            )
        }</div>
    )
}