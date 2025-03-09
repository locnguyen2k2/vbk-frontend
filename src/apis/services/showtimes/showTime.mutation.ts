import { gql } from '@apollo/client';
import { showTimesSimpleFields } from '../../fragments/showTimes.fragment';

// export const UPDATE_SHOW_TIME_MUTATION = gql`
//     ${showTimesSimpleFields}
//     mutation updateShowTimes($showTimesId: Int!, $updateShowTimesArgs: UpdateShowTimesArgs!) {
//         updateShowTimes(showTimesId: $showTimesId, updateShowTimesArgs: $updateShowTimesArgs) {
//             ...showTimesSimpleFields
//         }
//     }
// `;

export const CREATE_SHOW_TIME_MUTATION = gql`
    ${showTimesSimpleFields}
    mutation createShowTimes($createShowTimesArgs: CreateShowTimesArgs!) {
        createShowTimes(createShowTimesArgs: $createShowTimesArgs) {
            ...showTimesSimpleFields
        }
    }
`;

export const ENABLE_SHOW_TIMES_MUTATION = gql`
    ${showTimesSimpleFields}
    mutation enableShowTimes($showTimesId: [Int!]!, $enableShowTimeArgs: EnableShowTimeArgs!) {
        enableShowTimes(showTimesId: $showTimesId, enableShowTimeArgs: $enableShowTimeArgs) {
            id
        }
    }
`;

