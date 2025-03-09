import { gql } from '@apollo/client';

export const customerDefaultFields = gql`
    fragment customerDefaultFields on CustomerModel {
        id
        createdAt
        updatedAt
        enable
        createBy
        updateBy
    }
`;