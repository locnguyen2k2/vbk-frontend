import { gql } from '@apollo/client';

export const productCategorySimpleFields = gql`
    fragment productCategorySimpleFields on ProductCategoryModel {
        id
        createdAt
        updatedAt
        enable
        createBy
        updateBy

        name
        value
        description
    }
`;

export const productCategoryDefaultFields = gql`
    fragment productCategoryDefaultFields on ProductCategoryDetail {
        id
        createdAt
        updatedAt
        enable
        createBy
        updateBy

        name
        value
        description
    }
`;
