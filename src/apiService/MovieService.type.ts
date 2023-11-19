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
