import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { HYDRATE } from 'next-redux-wrapper';

import { AllMoviesResponse, QueryArgs, MovieResponse } from './MovieService.type';

export const movieAPI = createApi({
  reducerPath: 'movieAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://yts.mx',
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (build) => ({
    fetchAllMovies: build.query<AllMoviesResponse, QueryArgs>({
      query: ({ limit, page, search }) => ({
        url: '/api/v2/list_movies.json',
        params: {
          limit: limit,
          page: page,
          query_term: search,
        },
      }),
    }),
    fetchMovieById: build.query<MovieResponse, number>({
      query: (id: number) => ({
        url: `/api/v2/movie_details.json?movie_id=${id}`,
      }),
    }),
  }),
});

export const {
  useFetchAllMoviesQuery,
  useFetchMovieByIdQuery,
  util: { getRunningQueriesThunk },
} = movieAPI;
export const { fetchAllMovies, fetchMovieById } = movieAPI.endpoints;
