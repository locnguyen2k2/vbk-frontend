import { paginatedDefaultFields } from '../../fragments/pagination.fragment';
import { gql } from '@apollo/client';
import { sectorSimpleFields } from '../../fragments/sector.fragment';

export const SECTORS_PAGINATED_QUERY = gql`
    ${sectorSimpleFields}
    ${paginatedDefaultFields}
    query sectors($pageOptions: SectorPageOptions) {
        sectors(pageOptions: $pageOptions) {
            data {
                ...sectorSimpleFields
            }
            paginated {
                ...paginatedDefaultFields
            }
        }
    }
`;
