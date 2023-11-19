import { ChangeEvent, FC } from "react";
import { appSlice } from "../../store/reducers/AppSlice";
import { useAppDispatch } from "../../hooks/redux";

const LimitSetter: FC = () => {
  const { setPageLimit, setCurrentPage } = appSlice.actions;
  const dispatch = useAppDispatch();
  const selectInputHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const currentValueLimit = e.currentTarget.value;
    dispatch(setPageLimit(Number(currentValueLimit)));
    dispatch(setCurrentPage(1));
  };
  return (
    <div style={{ display: "flex", gap: "15px" }}>
      <span>Limit items per page: </span>
      <select onChange={selectInputHandler}>
        <option value="3" defaultChecked>
          3
        </option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
    </div>
  );
};

export default LimitSetter;
