import { gql } from '@apollo/client';
import { productCategoryDefaultFields, productCategorySimpleFields } from '../../fragments/category.fragment';

export const UPDATE_PROD_CATEGORY_MUTATION = gql`
    ${productCategoryDefaultFields}
    mutation updateProductCategory($productCategoryId: Int!, $updateProductCategoryArgs: UpdateProductCategoryArgs!) {
        updateProductCategory(productCategoryId: $productCategoryId, updateProductCategoryArgs: $updateProductCategoryArgs) {
            ...productCategoryDefaultFields
        }
    }
`;

export const ENABLE_PROD_CATEGORIES_MUTATION = gql`
    ${productCategorySimpleFields}
    mutation enableProdCategories($productCategoryId: [Int!]!, $enableProdCategoryArgs: EnableProdCategoryArgs!) {
        enableProdCategories(productCategoryId: $productCategoryId, enableProdCategoryArgs: $enableProdCategoryArgs) {
            id
        }
    }
`;