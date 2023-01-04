import {useQuery} from "react-query";
import {GraphQLClient, gql} from "graphql-request";

const API_URL = "http://localhost/LATEST/resources/graphXql";

const graphQLClient = new GraphQLClient(API_URL, {
    headers: {Authorization: `Basic ${process.env.REACT_APP_API_KEY}`}
});

export function useGetItem(uri) {
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
            }
        }`);
    });
}

export function useGetProposition(partNumber, itemNumber) {
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