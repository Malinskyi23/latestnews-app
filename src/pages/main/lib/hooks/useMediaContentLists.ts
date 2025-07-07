import {
  useGetFilmCollectionsQuery,
  useGetFilmsQuery,
} from '@/shared/api/baseApi';

const GENRE_ID_CARTOONS = 18;

export const useMediaContentLists = () => {
  // 'TOP_250_MOVIES' is a collection (... or top) type

  const topPopularMoviesResponse = useGetFilmCollectionsQuery({
    type: 'TOP_POPULAR_MOVIES',
    page: 1,
  });

  // 'TOP_250_MOVIES' is a collection (... or top) type
  const top250MoviesResponse = useGetFilmCollectionsQuery({
    type: 'TOP_250_MOVIES',
    page: 1,
  });

  // 'FILM' is a film type
  const filmResponse = useGetFilmsQuery({
    countryId: 1,
    genreId: 1,
    order: 'NUM_VOTE',
    type: 'FILM',
    page: 1,
  });

  // 'TV_SERIES' is a film type
  const tvSeriesResponse = useGetFilmsQuery({
    countryId: 1,
    genreId: 1,
    order: 'NUM_VOTE',
    type: 'TV_SERIES',
    page: 1,
  });

  // 'FILM' is a film type
  const cartoonsResponse = useGetFilmsQuery({
    countryId: 1,
    genreId: GENRE_ID_CARTOONS,
    order: 'NUM_VOTE',
    type: 'FILM',
    page: 1,
  });

  const isFetching =
    topPopularMoviesResponse.isFetching ||
    top250MoviesResponse.isFetching ||
    filmResponse.isFetching ||
    tvSeriesResponse.isFetching ||
    cartoonsResponse.isFetching;

  const isLoading =
    topPopularMoviesResponse.isLoading ||
    top250MoviesResponse.isLoading ||
    filmResponse.isLoading ||
    tvSeriesResponse.isLoading ||
    cartoonsResponse.isLoading;

  const error =
    topPopularMoviesResponse.error ??
    top250MoviesResponse.error ??
    filmResponse.error ??
    tvSeriesResponse.error ??
    cartoonsResponse.error;

  return {
    topPopularMoviesResponse,
    top250MoviesResponse,
    filmResponse,
    tvSeriesResponse,
    cartoonsResponse,
    isFetching,
    isLoading,
    error,
  };
};
