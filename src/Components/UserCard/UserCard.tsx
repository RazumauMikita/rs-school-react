import { FC } from "react";
import { IMovie } from "../../apiService/UserServices";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { appSlice } from "../../store/reducers/AppSlice";
interface UserCardProps {
  user: IMovie;
}
const UserCard: FC<UserCardProps> = (props) => {
  const { user } = props;
  const { limit, currentPage } = useAppSelector((state) => state.appReducer);
  const dispatch = useAppDispatch();
  const { openDetails } = appSlice.actions;
  const openDetailHandler = () => {
    dispatch(openDetails());
  };
  return (
    <div
      style={{
        width: "170px",
        padding: "5px 10px",
        border: "2px solid black",
        marginTop: "10px",
        textAlign: "center",
      }}
    >
      <Link
        to={{
          pathname: `/movies/${user.id}`,
          search: `page=${currentPage}&limit=${limit}`,
        }}
      >
        <h3 style={{ fontSize: "20px" }} onClick={openDetailHandler}>
          {user.title}
        </h3>
      </Link>
    </div>
  );
};

export default UserCard;
