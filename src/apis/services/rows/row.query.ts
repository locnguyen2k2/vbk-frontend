import { paginatedDefaultFields } from '../../fragments/pagination.fragment';
import { gql } from '@apollo/client';
import { rowDefaultFields, rowSimpleFields } from '../../fragments/row.fragment';

export const ROWS_PAGINATED_QUERY = gql`
    ${rowSimpleFields}
    ${paginatedDefaultFields}
    query rows($pageOptions: RowPageOptions) {
        rows(pageOptions: $pageOptions) {
            data {
                ...rowSimpleFields
            }
            paginated {
                ...paginatedDefaultFields
            }
        }
    }
`;

export const ROW_DETAIL_QUERY = gql`
    ${rowDefaultFields}
    query rowDetail($rowId: Int!) {
        rowDetail(rowId: $rowId) {
            ...rowDefaultFields
        }
    }
`;

