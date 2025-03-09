import { gql } from '@apollo/client';
import { movieSimpleFields } from './movie.fragment';
import { theaterSimpleFields } from './theater.fargment';


export const showTimesSimpleFields = gql`
    fragment showTimesSimpleFields on ShowTimesModel {
        id
        enable
        startTime
    }
`;

export const showTimesDefaultFields = gql`
    ${theaterSimpleFields}
    ${movieSimpleFields}
    fragment showTimesDefaultFields on ShowTimeDetail {
        createdAt
        updatedAt
        createBy
        updateBy
        movie {
            ...movieSimpleFields
        }
        theater {
            ...theaterSimpleFields
        }
        schedule {
            id
        }
        id
        enable
        startTime
    }
`;

