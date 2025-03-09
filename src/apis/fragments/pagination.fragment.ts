import { gql } from '@apollo/client';

export const paginatedDefaultFields = gql`
    fragment paginatedDefaultFields on Pagination {
        fromDate
        hasNext
        hasPrev
        keyword
        numberRecords
        page
        pages
        sort
        sorted
        take
        toDate
    }
`;
