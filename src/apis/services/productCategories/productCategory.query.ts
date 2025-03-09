import { paginatedDefaultFields } from '../../fragments/pagination.fragment';
import { gql } from '@apollo/client';
import { productCategoryDefaultFields, productCategorySimpleFields } from '../../fragments/category.fragment';

export const PROD_CATEGORIES_PAGINATED_QUERY = gql`
    ${productCategorySimpleFields}
    ${paginatedDefaultFields}
    query productCategories($pageOptions: ProductCategoryPageOptions) {
        productCategories(pageOptions: $pageOptions) {
            data {
                ...productCategorySimpleFields
            }
            paginated {
                ...paginatedDefaultFields
            }
        }
    }
`;

export const PROD_CATEGORIES_DETAIL_QUERY = gql`
    ${productCategoryDefaultFields}
    query productCategoryDetail($productCategoryId: Int!) {
        productCategoryDetail(productCategoryId: $productCategoryId) {
            ...productCategoryDefaultFields
        }
    }
`;
