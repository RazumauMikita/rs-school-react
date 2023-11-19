import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export interface IMovie {
  id: number;
  title: string;
  year: number;
  rating: number;
  url: string;
}

export interface QueryArgs {
  limit: number;
  page: number;
  search: string;
}

export interface AllMoviesResponse {
  status: string;
  status_message: string;
  data: {
    movie_count: number;
    limit: number;
    page_number: number;
    movies: IMovie[];
  };
}

export interface MovieResponse {
  status: string;
  status_message: string;
  data: {
    movie: IMovie;
  };
}

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
