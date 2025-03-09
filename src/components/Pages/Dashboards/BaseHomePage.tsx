import { useEffect, useState } from 'react';
import { MovieProductsQuery, MovieSchedulesDetail, QueryMovieProductsArgs } from '../../../generated/graphql';
import { LazyQueryResultTuple, useLazyQuery } from '@apollo/client';
import { MOVIES_PAGINATED_QUERY } from '../../../apis/services/movies/movie.query';

export default function BaseHomePage() {
  const [currentHover, setIsHover] = useState(false);
  const [numbOfSlide, setNumbOfSlide] = useState(5);
  const [movies, setMovies] = useState<MovieSchedulesDetail[] | []>([]);

  const onLoadMovies = () => {
    const onLoadCompleted = (data: MovieSchedulesDetail[]) => {
      setMovies(data);
    };
    getMovies({
      variables: {
        pageOptions: {
          all: true,
        },
      },
    }).then((res) => {
      if (res.data && res.data.movieProducts?.data) onLoadCompleted(res.data.movieProducts.data as MovieSchedulesDetail[]);
    });
  };

  const onMouseEnter = (e: any) => {
    setIsHover(true);
  };
  const onMouseLeave = (e: any) => {
    setIsHover(false);
  };
  useEffect(() => {
    onLoadMovies();
  }, []);

  const [getMovies, { loading: loadingMovies }]: LazyQueryResultTuple<MovieProductsQuery, QueryMovieProductsArgs> = useLazyQuery(MOVIES_PAGINATED_QUERY, {
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  });
  return (
    <>
      
    </>
  );
}