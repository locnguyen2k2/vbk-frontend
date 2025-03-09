import { gql } from '@apollo/client';
import { rowDefaultFields, rowSimpleFields } from '../../fragments/row.fragment';

export const UPDATE_ROW_MUTATION = gql`
    ${rowDefaultFields}
    mutation updateRow($rowId: Int!, $updateRowArgs: UpdateRowArgs!) {
        updateRow(rowId: $rowId, updateRowArgs: $updateRowArgs) {
            ...rowDefaultFields
        }
    }
`;

export const CREATE_ROW_MUTATION = gql`
    ${rowDefaultFields}
    mutation createRow($createRowArgs: CreateRowArgs!) {
        createRow(createRowArgs: $createRowArgs) {
            ...rowDefaultFields
        }
    }
`;

export const ENABLE_ROWS_MUTATION = gql`
    ${rowSimpleFields}
    mutation enableRows($rowId: [Int!]!, $enableRowArgs: EnableRowArgs!) {
        enableRows(rowId: $rowId, enableRowArgs: $enableRowArgs) {
            id
        }
    }
`;