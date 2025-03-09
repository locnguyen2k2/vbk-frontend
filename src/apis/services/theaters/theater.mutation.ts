import { gql } from '@apollo/client';
import { theaterDefaultFields, theaterSimpleFields } from '../../fragments/theater.fargment';

export const UPDATE_THEATER_MUTATION = gql`
    ${theaterDefaultFields}
    mutation updateTheater($theaterId: Int!, $updateTheaterArgs: UpdateTheaterArgs!) {
        updateTheater(theaterId: $theaterId, updateTheaterArgs: $updateTheaterArgs) {
            ...theaterDefaultFields
        }
    }
`;

export const CREATE_THEATER_MUTATION = gql`
    ${theaterDefaultFields}
    mutation createTheater($createTheaterArgs: CreateTheaterArgs!) {
        createTheater(createTheaterArgs: $createTheaterArgs) {
            ...theaterDefaultFields
        }
    }
`;

export const ENABLE_THEATERS_MUTATION = gql`
    ${theaterSimpleFields}
    mutation enableTheaters($theaterId: [Int!]!, $enableTheaterArgs: EnableTheaterArgs!) {
        enableTheaters(theaterId: $theaterId, enableTheaterArgs: $enableTheaterArgs) {
            id
        }
    }
`;