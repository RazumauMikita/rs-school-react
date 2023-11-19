import { FC } from "react";
import { userAPI } from "../../apiService/UserServices";
import UserCard from "../UserCard/UserCard";
import { useAppSelector } from "../../hooks/redux";
import LimitSetter from "../LimitSetter/LimitSetter";
import NewPagination from "../NewPagination/NewPagination";

const UserViewer: FC = () => {
  const { searchQuery, limit, currentPage } = useAppSelector(
    (state) => state.appReducer,
  );
  const { data: users, isLoading } = userAPI.useFetchAllUsersQuery({
    limit: limit,
    search: searchQuery,
    page: currentPage,
  });

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      {!isLoading && <LimitSetter />}
      <NewPagination />
      {isLoading && <p>Loading...</p>}
      {!isLoading && users?.length === 0 && <p>Not users</p>}
      {users &&
        users.map((user) => {
          return (
            <div key={user.id}>
              <UserCard user={user} />
            </div>
          );
        })}
    </div>
  );
};

export default UserViewer;
