import { movieDefaultFields, movieSimpleFields } from '../../fragments/movie.fragment';
import { paginatedDefaultFields } from '../../fragments/pagination.fragment';
import { gql } from '@apollo/client';

export const MOVIES_PAGINATED_QUERY = gql`
    ${movieDefaultFields}
    ${paginatedDefaultFields}
    query movieProducts($pageOptions: MovieProductPageOptions) {
        movieProducts(pageOptions: $pageOptions) {
            data {
                ...movieDefaultFields
            }
            paginated {
                ...paginatedDefaultFields
            }
        }
    }
`;

export const MOVIE_DETAIL_QUERY = gql`
    ${movieSimpleFields}
    query movieDetail($movieId: Int!) {
        movieDetail(movieId: $movieId) {
            ...movieSimpleFields
        }
    }
`;
