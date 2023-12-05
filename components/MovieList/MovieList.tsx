import React, { FC } from 'react';
import Link from 'next/link';

import { useFetchAllMoviesQuery } from '../../src/apiService/MovieService';
import { useAppSelector } from '../../src/hooks/redux';
import { selectApp } from '../../src/store/reducers/selectors';

import Pagination from '../Pagination/Pagination';
import LimitSetter from '../LimitSetter/LimitSetter';

const MovieList: FC = () => {
  const { searchQuery, limit, currentPage } = useAppSelector(selectApp);

  const { isFetching, data } = useFetchAllMoviesQuery({
    limit: limit,
    search: searchQuery,
    page: currentPage,
  });
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <LimitSetter />
      {!isFetching ? (
        <>
          <Pagination items={data?.data.movie_count} />
          {data?.data.movies.map((movie) => {
            return (
              <div key={movie.id}>
                <Link
                  href={{
                    pathname: movie.id.toString(),
                    query: { limit: limit, page: currentPage, search: searchQuery },
                  }}
                >
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
