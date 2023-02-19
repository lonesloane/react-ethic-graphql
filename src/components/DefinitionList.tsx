import React from "react";

import {Accordion, AccordionSummary, AccordionDetails, Typography} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {useGetDefinitions} from "../useRequest";
import {Link} from "react-router-dom";
import {IEthicItem} from "../EthicTypes";

interface IDefinitionListItem {
    definition: IEthicItem;
}

const DefinitionListTitle = ({definition}: IDefinitionListItem) => {
    const {partNumber, itemNumber} = definition;

    return (
        <Typography>
            Partie {partNumber} - Definition {itemNumber}
        </Typography>
    )
};

const DefinitionListItem = ({definition}: IDefinitionListItem) => {
    const {partNumber, itemNumber, text, references, descendants} = definition;

    return (
        <Typography>
            <p>{text}</p>
            {
                (references || descendants) &&
                <Link to={`/definition/${partNumber}/${itemNumber}`}>Read more &rarr;</Link>
            }
        </Typography>
    )
};

export default function DefinitionList() {
    const [open, setOpen] = React.useState<string | false>(false);
    const accChange = (card: string) => (_e: React.SyntheticEvent, isOpen: boolean) => {
        setOpen(isOpen ? card : false);
    };

    const {data, error, isLoading, isSuccess} = useGetDefinitions();

    if (error) return <h1>Something went wrong!!!</h1>
    if (isLoading) return <h1>Loading...</h1>

    return (
        <div>{
            isSuccess && data.definitions.map(
                (definition: IEthicItem) =>
                    <Accordion
                        key={definition.name}
                        expanded={open === definition.name}
                        onChange={accChange(definition.name)}
                    >
                        <AccordionSummary expandIcon={<ArrowDropDownIcon/>}>
                            <DefinitionListTitle key={definition.name} definition={definition}/>
                        </AccordionSummary>
                        <AccordionDetails>
                            <DefinitionListItem key={definition.name} definition={definition}/>
                        </AccordionDetails>
                    </Accordion>
            )
        }</div>
    )
}