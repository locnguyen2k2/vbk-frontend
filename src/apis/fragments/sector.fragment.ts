import { gql } from '@apollo/client';
import { theaterSimpleFields } from './theater.fargment';

export const sectorSimpleFields = gql`
    fragment sectorSimpleFields on SectorModel {
        id
        createdAt
        updatedAt
        enable
        createBy
        updateBy

        name
        description
        status
    }
`;

export const sectorDefaultFields = gql`
    ${theaterSimpleFields}
    fragment sectorDefaultFields on SectorDetail {
        id
        createdAt
        updatedAt
        enable
        createBy
        updateBy

        name
        description
        status

        theater {
            ...theaterSimpleFields
        }
    }
`;
