import React from "react";

import {Accordion, AccordionSummary, AccordionDetails, Typography} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {useGetPrefaces} from "../useRequest";
import {Link} from "react-router-dom";
import {IEthicItem} from "../EthicTypes";

interface IPrefaceListItem {
    preface: IEthicItem;
}

const PrefaceListTitle = ({preface}: IPrefaceListItem) => {
    const {partNumber, itemNumber} = preface;

    return (
        <Typography>
            Partie {partNumber} - Preface {itemNumber}
        </Typography>
    )
};

const PrefaceListItem = ({preface}: IPrefaceListItem) => {
    const {partNumber, itemNumber, text, references, descendants} = preface;

    return (
        <Typography>
            <p>{text}</p>
            {
                (references || descendants) &&
                <Link to={`/preface/${partNumber}/${itemNumber}`}>Read more &rarr;</Link>
            }
        </Typography>
    )
};

export default function PrefaceList() {
    const [open, setOpen] = React.useState<string | false>(false);
    const accChange = (card: string) => (_e: React.SyntheticEvent, isOpen: boolean) => {
        setOpen(isOpen ? card : false);
    };

    const {data, error, isLoading, isSuccess} = useGetPrefaces();

    if (error) return <h1>Something went wrong!!!</h1>
    if (isLoading) return <h1>Loading...</h1>

    return (
        <div>{
            isSuccess && data.prefaces.map(
                (preface: IEthicItem) =>
                    <Accordion
                        key={preface.name}
                        expanded={open === preface.name}
                        onChange={accChange(preface.name)}
                    >
                        <AccordionSummary expandIcon={<ArrowDropDownIcon/>}>
                            <PrefaceListTitle key={preface.name} preface={preface}/>
                        </AccordionSummary>
                        <AccordionDetails>
                            <PrefaceListItem key={preface.name} preface={preface}/>
                        </AccordionDetails>
                    </Accordion>
            )
        }</div>
    )
}