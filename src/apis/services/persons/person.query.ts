import { gql } from '@apollo/client';
import { paginatedDefaultFields } from '../../fragments/pagination.fragment';
import { personDefaultFields } from '../../fragments/person.fragment';

export const PERSONS_PAGINATED_QUERY = gql`
    ${personDefaultFields}
    ${paginatedDefaultFields}
    query persons($pageOptions: PersonPageOptions) {
        persons(pageOptions: $pageOptions) {
            data {
                ...personDefaultFields
            }
            paginated {
                ...paginatedDefaultFields
            }
        }
    }
`;

export const PERSON_DETAIL_QUERY = gql`
    ${personDefaultFields}
    query personDetail($personId: Int!) {
        personDetail(personId: $personId) {
            ...personDefaultFields
        }
    }
`;
