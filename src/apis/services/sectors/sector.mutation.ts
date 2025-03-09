import { gql } from '@apollo/client';
import { sectorDefaultFields, sectorSimpleFields } from '../../fragments/sector.fragment';

export const UPDATE_SECTOR_MUTATION = gql`
    ${sectorSimpleFields}
    mutation updateSector($sectorId: Int!, $updateSectorArgs: UpdateSectorArgs!) {
        updateSector(sectorId: $sectorId, updateSectorArgs: $updateSectorArgs) {
            ...sectorDefaultFields
        }
    }
`;

export const SECTOR_DETAIL_QUERY = gql`
    ${sectorDefaultFields}
    query sectorDetail($sectorId: Int!) {
        sectorDetail(sectorId: $sectorId) {
            ...sectorDefaultFields
        }
    }
`;


export const CREATE_SECTOR_MUTATION = gql`
    ${sectorSimpleFields}
    mutation createSector($createSectorArgs: CreateSectorArgs!) {
        createSector(createSectorArgs: $createSectorArgs) {
            ...sectorDefaultFields
        }
    }
`;

export const ENABLE_SECTORS_MUTATION = gql`
    ${sectorSimpleFields}
    mutation enableSectors($sectorId: [Int!]!, $enableSectorArgs: EnableSectorArgs!) {
        enableSectors(sectorId: $sectorId, enableSectorArgs: $enableSectorArgs) {
            id
        }
    }
`;