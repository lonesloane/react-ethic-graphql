import {useQuery} from "react-query";
import {GraphQLClient, gql} from "graphql-request";

const API_URL = "http://localhost/LATEST/resources/graphXql";

const graphQLClient = new GraphQLClient(API_URL, {
    headers: {Authorization: `Basic ${process.env.REACT_APP_API_KEY}`}
});

export function useGetItem(uri: string) {
    return useQuery(["item", uri], () => {
        return graphQLClient.request(gql`
        query ethicItem($uri: String!){
            ethicItem(uri:$uri){
                type
                name
                text
                references {
                    type
                    name
                    uri
                }
                descendants {
                    type
                    name
                    uri
                }
            }            
        }`, {uri});
    });
}

export function useGetAffectionDefinitions() {
    return useQuery("get-affection-definitions", () => {
        return graphQLClient.request(gql`
        {
            affectionDefinitions {
                type
                partNumber
                itemNumber
                name
                text
                references {
                    uri
                }
                descendants {
                    uri
                }
            }
        }`);
    });
}

export function useGetAffectionDefinition(partNumber: number, itemNumber: number) {
    return useQuery(["get-affection-definition", partNumber, itemNumber], () => {
        return graphQLClient.request(gql`
        query affectionDefinition($partNumber: Int!, $itemNumber: Int!){
            affectionDefinition (partNumber:$partNumber, itemNumber: $itemNumber){
                name
                type
                partNumber
                itemNumber
                text
                references {
                    name
                    type
                    uri
                }
                descendants {
                    name
                    type
                    uri
              }
            }
        }`, {partNumber, itemNumber});
    });
}

export function useGetAxioms() {
    return useQuery("get-axioms", () => {
        return graphQLClient.request(gql`
        {
            axioms {
                type
                partNumber
                itemNumber
                name
                text
                references {
                    uri
                }
                descendants {
                    uri
                }
            }
        }`);
    });
}

export function useGetAxiom(partNumber: number, itemNumber: number) {
    return useQuery(["get-axiom", partNumber, itemNumber], () => {
        return graphQLClient.request(gql`
        query axiom($partNumber: Int!, $itemNumber: Int!){
            axiom (partNumber:$partNumber, itemNumber: $itemNumber){
                name
                type
                partNumber
                itemNumber
                text
                references {
                    name
                    type
                    uri
                }
                descendants {
                    name
                    type
                    uri
              }
            }
        }`, {partNumber, itemNumber});
    });
}

export function useGetDefinitions() {
    return useQuery("get-definitions", () => {
        return graphQLClient.request(gql`
        {
            definitions {
                type
                partNumber
                itemNumber
                name
                text
            }
        }`);
    });
}

export function useGetDefinition(partNumber: number, itemNumber: number) {
    return useQuery(["get-definition", partNumber, itemNumber], () => {
        return graphQLClient.request(gql`
        query definition($partNumber: Int!, $itemNumber: Int!){
            definition (partNumber:$partNumber, itemNumber: $itemNumber){
                name
                type
                partNumber
                itemNumber
                text
                references {
                    name
                    type
                    uri
                }
                descendants {
                    name
                    type
                    uri
              }
            }
        }`, {partNumber, itemNumber});
    });
}

export function useGetPostulates() {
    return useQuery("get-postulates", () => {
        return graphQLClient.request(gql`
        {
            postulates {
                type
                partNumber
                itemNumber
                name
                text
                references {
                    uri
                }
                descendants {
                    uri
                }
            }
        }`);
    });
}

export function useGetPostulate(partNumber: number, itemNumber: number) {
    return useQuery(["get-postulate", partNumber, itemNumber], () => {
        return graphQLClient.request(gql`
        query postulate($partNumber: Int!, $itemNumber: Int!){
            postulate (partNumber:$partNumber, itemNumber: $itemNumber){
                name
                type
                partNumber
                itemNumber
                text
                references {
                    name
                    type
                    uri
                }
                descendants {
                    name
                    type
                    uri
              }
            }
        }`, {partNumber, itemNumber});
    });
}

export function useGetPropositions() {
    return useQuery("get-propositions", () => {
        return graphQLClient.request(gql`
        {
            propositions {
                type
                partNumber
                itemNumber
                name
                text
                references {
                    uri
                }
                descendants {
                    uri
                }
            }
        }`);
    });
}

export function useGetProposition(partNumber: number, itemNumber: number) {
    return useQuery(["get-proposition", partNumber, itemNumber], () => {
        return graphQLClient.request(gql`
        query proposition($partNumber: Int!, $itemNumber: Int!){
            proposition (partNumber:$partNumber, itemNumber: $itemNumber){
                name
                type
                partNumber
                itemNumber
                text
                references {
                    name
                    type
                    uri
                }
                descendants {
                    name
                    type
                    uri
              }
            }
        }`, {partNumber, itemNumber});
    });
}

export function useGetPreface(partNumber: number, itemNumber: number) {
    return useQuery(["get-preface", partNumber, itemNumber], () => {
        return graphQLClient.request(gql`
        query preface($partNumber: Int!, $itemNumber: Int!){
            preface (partNumber:$partNumber, itemNumber: $itemNumber){
                type
                name
                text
                references {
                    name
                    type
                    uri
                }
            }
        }`,{partNumber, itemNumber});
    });
}
