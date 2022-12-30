import {useQuery} from "react-query";
import {GraphQLClient, gql} from "graphql-request";

const API_URL = "http://localhost/LATEST/resources/graphXql";

const graphQLClient = new GraphQLClient(API_URL, {
    headers: {Authorization: "Basic YWRtaW46YWRtaW4="}
});

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

/*
export function useGetPropositions() {
    return useQuery("data", () =>
        fetch(API_URL, {
            method: "POST",
            headers: {Authorization: "Basic YWRtaW46YWRtaW4="},
            body: `
      {
            propositions {
                name
                text
            }
        }
      `,
        })
            .then((res) => res.json())
            .then((res) => res.data)
    );
}
*/

export function useGetProposition(partNumber, itemNumber) {
    return useQuery(["get-proposition", partNumber, itemNumber], () => {
        return graphQLClient.request(gql`
        query proposition($partNumber: Int!, $itemNumber: Int!){
            proposition (partNumber:$partNumber, itemNumber: $itemNumber){
                name
                text
                references {
                    name
                    text
                }
                descendants {
                    name
                    text
                    references {
                        name
                    }
                }
            }
        }`, {partNumber, itemNumber});
    });
}