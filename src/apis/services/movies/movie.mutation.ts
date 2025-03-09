import { gql } from '@apollo/client';
import { movieDefaultFields, movieSimpleFields } from '../../fragments/movie.fragment';

export const UPDATE_MOVIE_MUTATION = gql`
    ${movieSimpleFields}
    mutation updateMovie($movieId: Int!, $updateMovieArgs: UpdateMovieArgs!) {
        updateMovie(movieId: $movieId, updateMovieArgs: $updateMovieArgs) {
            ...movieSimpleFields
        }
    }
`;

export const CREATE_MOVIE_MUTATION = gql`
    ${movieDefaultFields}
    mutation createMovie($createMovieArgs: CreateMovieArgs!) {
        createMovie(createMovieArgs: $createMovieArgs) {
            ...movieDefaultFields
        }
    }
`;

export const ENABLE_MOVIES_MUTATION = gql`
    ${movieSimpleFields}
    mutation enableMovies($movieId: [Int!]!, $enableMovieArgs: EnableMovieArgs!) {
        enableMovies(movieId: $movieId, enableMovieArgs: $enableMovieArgs) {
            id
        }
    }
`;