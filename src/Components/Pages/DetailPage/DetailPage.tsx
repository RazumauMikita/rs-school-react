import { FC } from "react";
import { useParams } from "react-router-dom";
import { userAPI } from "../../../apiService/UserServices";
import { appSlice } from "../../../store/reducers/AppSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";

const DetailPage: FC = () => {
  const { id } = useParams();
  const { data: user, isLoading } = userAPI.useFetchUserByIdQuery(Number(id));
  const { closeDetails } = appSlice.actions;
  const { isDetailOpen } = useAppSelector((state) => state.appReducer);
  const dispatch = useAppDispatch();
  const closeSideSection = () => {
    dispatch(closeDetails());
    console.log(isDetailOpen);
  };

  return (
    <div>
      <button onClick={closeSideSection}>CLOSE</button>
      {!isLoading ? (
        <div>
          <h1>{user?.name}</h1>
          <p>Email - - {user?.email}</p>
          <p>Phone - {user?.phone}</p>
          <p>User ID - {user?.id}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailPage;
