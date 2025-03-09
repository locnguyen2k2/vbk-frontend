import { paginatedDefaultFields } from '../../fragments/pagination.fragment';
import { gql } from '@apollo/client';
import { theaterDefaultFields } from '../../fragments/theater.fargment';

export const THEATERS_PAGINATED_QUERY = gql`
    ${theaterDefaultFields}
    ${paginatedDefaultFields}
    query theaters($pageOptions: TheaterPageOptions) {
        theaters(pageOptions: $pageOptions) {
            data {
                ...theaterDefaultFields
            }
            paginated {
                ...paginatedDefaultFields
            }
        }
    }
`;
export const THEATER_DETAIL_QUERY = gql`
    ${theaterDefaultFields}
    query theaterDetail($theaterId: Int!) {
        theaterDetail(theaterId: $theaterId) {
            ...theaterDefaultFields
        }
    }
`;
