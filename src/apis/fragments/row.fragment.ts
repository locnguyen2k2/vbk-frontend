import { gql } from '@apollo/client';
import { sectorSimpleFields } from './sector.fragment';

export const rowSimpleFields = gql`
    fragment rowSimpleFields on RowModel {
        id
        createdAt
        updatedAt
        enable
        createBy
        updateBy

        name
    }
`;

export const rowDefaultFields = gql`
    ${sectorSimpleFields}
    fragment rowDefaultFields on RowDetail {
        id
        createdAt
        updatedAt
        enable
        createBy
        updateBy

        name
        sector {
            ...sectorSimpleFields
        }
    }
`;
