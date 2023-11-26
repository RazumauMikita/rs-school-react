import React, { FC } from "react";
import { useFetchAllMoviesQuery } from "../../src/apiService/MovieService";
import { useAppSelector } from "../../src/hooks/redux";
import Link from "next/link";
import { selectApp } from "../../src/store/reducers/selectors";

const MovieList: FC = () => {
  const { searchQuery, limit, currentPage } = useAppSelector(selectApp);

  const { isFetching, data } = useFetchAllMoviesQuery({
    limit: limit,
    search: searchQuery,
    page: currentPage,
  });

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      {isFetching && <p>Loading</p>}
      {data?.data.movies.map((movie) => {
        return (
          <div key={movie.id}>
            <Link href={`${movie.id}`}>
              <div>{movie.title}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
