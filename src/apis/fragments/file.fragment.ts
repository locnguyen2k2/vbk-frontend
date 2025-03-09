import { gql } from '@apollo/client';

export const fileDefaultFields = gql`
    fragment fileDefaultFields on FileInfo {
        id
        createdAt
        updatedAt
        enable
        createBy
        updateBy
        
        name
        path
        type
    }
`;
