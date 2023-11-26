import { FC } from "react";
import { movieAPI } from "../../apiService/MovieService";
import UserCard from "../UserCard/UserCard";
import { useAppSelector } from "../../hooks/redux";
import LimitSetter from "../LimitSetter/LimitSetter";
import NewPagination from "../Pagination/Pagination";

const UserViewer: FC = () => {
  const { searchQuery, limit, currentPage } = useAppSelector(
    (state) => state.appReducer,
  );
  const { data, isLoading } = movieAPI.useFetchAllMoviesQuery({
    limit: limit,
    search: searchQuery,
    page: currentPage,
  });

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      {!isLoading && <LimitSetter />}
      {!isLoading && <NewPagination items={data?.data.movie_count} />}
      {isLoading && <p>Loading...</p>}
      {!isLoading && data?.data.movie_count === 0 && <p>Not exist movie...</p>}
      {data?.data.movies &&
        data.data.movies.map((movie) => {
          return (
            <div key={movie.id}>
              <UserCard user={movie} />
            </div>
          );
        })}
    </div>
  );
};

export default UserViewer;
