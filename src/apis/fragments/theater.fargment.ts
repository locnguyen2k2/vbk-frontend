import { gql } from '@apollo/client';
import { fileDefaultFields } from './file.fragment';

export const theaterSimpleFields = gql`
    fragment theaterSimpleFields on TheaterModel {
        id
        createdAt
        updatedAt
        enable
        createBy
        updateBy

        name
        address
    }
`;


export const theaterDefaultFields = gql`
    ${fileDefaultFields}
    fragment theaterDefaultFields on TheaterDetail {
        id
        createdAt
        updatedAt
        enable
        createBy
        updateBy

        name
        address
        photo {
            ...fileDefaultFields
        }
    }
`;

