import { paginatedDefaultFields } from '../../fragments/pagination.fragment';
import { gql } from '@apollo/client';
import { showTimesDefaultFields } from '../../fragments/showTimes.fragment';

export const SHOW_TIMES_PAGINATED_QUERY = gql`
    ${showTimesDefaultFields}
    ${paginatedDefaultFields}
    query showTimes($pageOptions: ShowTimePageOptions) {
        showTimes(pageOptions: $pageOptions) {
            data {
                ...showTimesDefaultFields
            }
            paginated {
                ...paginatedDefaultFields
            }
        }
    }
`;

export const SHOW_TIME_DETAIL_QUERY = gql`
    ${showTimesDefaultFields}
    query showTimeDetail($showTimesId: Int!) {
        showTimeDetail(showTimesId: $showTimesId) {
            ...showTimesDefaultFields
        }
    }
`;
