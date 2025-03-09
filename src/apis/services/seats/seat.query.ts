import { paginatedDefaultFields } from '../../fragments/pagination.fragment';
import { gql } from '@apollo/client';
import { seatDefaultFields, seatSimpleFields } from '../../fragments/seat.fragment';

export const SEATS_PAGINATED_QUERY = gql`
    ${seatSimpleFields}
    ${paginatedDefaultFields}
    query seats($pageOptions: SeatPageOptions) {
        seats(pageOptions: $pageOptions) {
            data {
                ...seatSimpleFields
            }
            paginated {
                ...paginatedDefaultFields
            }
        }
    }
`;

export const SEAT_DETAIL_QUERY = gql`
    ${seatDefaultFields}
    query seatDetail($seatId: Int!) {
        seatDetail(seatId: $seatId) {
            ...seatDefaultFields
        }
    }
`;