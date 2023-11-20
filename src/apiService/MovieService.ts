import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import {
  AllMoviesResponse,
  QueryArgs,
  MovieResponse,
} from "./MovieService.type";

export const movieAPI = createApi({
  reducerPath: "movieAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://yts.mx",
  }),
  endpoints: (build) => ({
    fetchAllMovies: build.query<AllMoviesResponse, QueryArgs>({
      query: ({ limit, page, search }) => ({
        url: "/api/v2/list_movies.json",
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
