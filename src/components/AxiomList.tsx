
import React from "react";

import {Accordion, AccordionSummary, AccordionDetails, Typography} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {useGetAxioms} from "../useRequest";
import {Link} from "react-router-dom";
import {IEthicItem} from "../EthicTypes";

interface IAxiomListItem {
    axiom: IEthicItem;
}

const AxiomListTitle = ({axiom}: IAxiomListItem) => {
    const {partNumber, itemNumber} = axiom;

    return (
        <Typography>
            Partie {partNumber} - Axiom {itemNumber}
        </Typography>
    )
};

const AxiomListItem = ({axiom}: IAxiomListItem) => {
    const {partNumber, itemNumber, text} = axiom;

    return (
        <Typography>
            <p>{text}</p>
            <Link to={`/axiom/${partNumber}/${itemNumber}`}>Read more &rarr;</Link>
        </Typography>
    )
};

export default function AxiomList() {
    const [open, setOpen] = React.useState<string | false>(false);
    const accChange = (card: string) => (_e: React.SyntheticEvent, isOpen: boolean) => {
        setOpen(isOpen ? card : false);
    };

    const {data, error, isLoading, isSuccess} = useGetAxioms();

    if (error) return <h1>Something went wrong!!!</h1>
    if (isLoading) return <h1>Loading...</h1>

    return (
        <div>{
            isSuccess && data.axioms.map(
                (axiom:IEthicItem) =>
                    <Accordion
                        key={axiom.name}
                        expanded={open === axiom.name}
                        onChange={accChange(axiom.name)}
                    >
                        <AccordionSummary expandIcon={<ArrowDropDownIcon/>}>
                            <AxiomListTitle key={axiom.name} axiom={axiom}/>
                        </AccordionSummary>
                        <AccordionDetails>
                            <AxiomListItem key={axiom.name} axiom={axiom}/>
                        </AccordionDetails>
                    </Accordion>
            )
        }</div>
    )
}