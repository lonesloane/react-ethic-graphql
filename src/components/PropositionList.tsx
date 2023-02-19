import React from "react";

import {Accordion, AccordionSummary, AccordionDetails, Typography} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {useGetPropositions} from "../useRequest";
import {Link} from "react-router-dom";
import {IEthicItem} from "../EthicTypes";

interface IPropositionListItem {
    proposition: IEthicItem;
}

const PropositionListTitle = ({proposition}: IPropositionListItem) => {
    const {partNumber, itemNumber} = proposition;

    return (
        <Typography>
            Partie {partNumber} - Proposition {itemNumber}
        </Typography>
    )
};

const PropositionListItem = ({proposition}: IPropositionListItem) => {
    const {partNumber, itemNumber, text, references, descendants} = proposition;

    return (
        <Typography>
            <p>{text}</p>
            {
                (references || descendants) &&
                <Link to={`/proposition/${partNumber}/${itemNumber}`}>Read more &rarr;</Link>
            }
        </Typography>
    )
};

export default function PropositionList() {
    const [open, setOpen] = React.useState<string | false>(false);
    const accChange = (card: string) => (_e: React.SyntheticEvent, isOpen: boolean) => {
        setOpen(isOpen ? card : false);
    };

    const {data, error, isLoading, isSuccess} = useGetPropositions();

    if (error) return <h1>Something went wrong!!!</h1>
    if (isLoading) return <h1>Loading...</h1>

    return (
        <div>{
            isSuccess && data.propositions.map(
                (proposition: IEthicItem) =>
                    <Accordion
                        key={proposition.name}
                        expanded={open === proposition.name}
                        onChange={accChange(proposition.name)}
                    >
                        <AccordionSummary expandIcon={<ArrowDropDownIcon/>}>
                            <PropositionListTitle key={proposition.name} proposition={proposition}/>
                        </AccordionSummary>
                        <AccordionDetails>
                            <PropositionListItem key={proposition.name} proposition={proposition}/>
                        </AccordionDetails>
                    </Accordion>
            )
        }</div>
    )
}