export interface IEthicItem {
    name: string;
    type: EthicItemType;
    partNumber: number;
    itemNumber: number;
    text: string;
    references: ISubItem | [ISubItem];
    descendants: ISubItem | [ISubItem];
}

export interface ISubItem {
    name: string;
    type: string;
    uri: string;
}

export enum EthicItemType {
    AFFECTION_DEFINITION = "AffectionDefinition",
    AXIOM = "Axiom",
    DEFINITION = "Definition",
    POSTULATE = "Postulate",
    PREFACE = "Preface",
    PROPOSITION = "Proposition"
}
