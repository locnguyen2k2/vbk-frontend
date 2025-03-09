import { gql } from '@apollo/client';

export const personDefaultFields = gql`
    fragment personDefaultFields on PersonModel {
        id
        createdAt
        updatedAt
        enable
        createBy
        updateBy

        firstName
        lastName
        birthDay
    }
`;
