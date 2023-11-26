import React, { FC } from "react";
import { useFetchAllMoviesQuery } from "../../src/apiService/MovieService";
import { useAppSelector } from "../../src/hooks/redux";
import Link from "next/link";
import { selectApp } from "../../src/store/reducers/selectors";
import Pagination from "../Pagination/Pagination";
import LimitSetter from "../LimitSetter/LimitSetter";

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
      {!isFetching ? (
        <>
          <LimitSetter />
          <Pagination items={data?.data.movie_count} />
          {data?.data.movies.map((movie) => {
            return (
              <div key={movie.id}>
                <Link href={`${movie.id}`}>
                  <div>{movie.title}</div>
                </Link>
              </div>
            );
          })}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieList;
