import React from "react";

import {Accordion, AccordionSummary, AccordionDetails, Typography} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {useGetAffectionDefinitions} from "../useRequest";
import {Link} from "react-router-dom";
import {IEthicItem} from "../EthicTypes";

interface IAffectionDefinitionListItem {
    affectionDefinition: IEthicItem;
}

const AffectionDefinitionListTitle = ({affectionDefinition}: IAffectionDefinitionListItem) => {
    const {partNumber, itemNumber} = affectionDefinition;

    return (
        <Typography>
            Partie {partNumber} - Affection Definition {itemNumber}
        </Typography>
    )
};

const AffectionDefinitionListItem = ({affectionDefinition}: IAffectionDefinitionListItem) => {
    const {partNumber, itemNumber, text, references, descendants} = affectionDefinition;

    return (
        <Typography>
            <p>{text}</p>
            {
                (references || descendants) &&
                <Link to={`/affection-definition/${partNumber}/${itemNumber}`}>Read more &rarr;</Link>
            }
        </Typography>
    )
};

export default function AffectionDefinitionList() {
    const [open, setOpen] = React.useState<string | false>(false);
    const accChange = (card: string) => (_e: React.SyntheticEvent, isOpen: boolean) => {
        setOpen(isOpen ? card : false);
    };

    const {data, error, isLoading, isSuccess} = useGetAffectionDefinitions();

    if (error) return <h1>Something went wrong!!!</h1>
    if (isLoading) return <h1>Loading...</h1>

    // @ts-ignore
    return (
        <div>
            {
                isSuccess && data.affectionDefinitions.map(
                    (affectionDefinition: IEthicItem) =>
                        <Accordion
                            key={affectionDefinition.name}
                            expanded={open === affectionDefinition.name}
                            onChange={accChange(affectionDefinition.name)}
                        >
                            <AccordionSummary expandIcon={<ArrowDropDownIcon/>}>
                                <AffectionDefinitionListTitle key={affectionDefinition.name}
                                                              affectionDefinition={affectionDefinition}/>
                            </AccordionSummary>
                            <AccordionDetails>
                                <AffectionDefinitionListItem key={affectionDefinition.name}
                                                             affectionDefinition={affectionDefinition}/>
                            </AccordionDetails>
                        </Accordion>
                )
            }
        </div>
    )
}