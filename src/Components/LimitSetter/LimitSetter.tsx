import { ChangeEvent, FC } from "react";
import { appSlice } from "../../store/reducers/AppSlice";
import { useAppDispatch } from "../../hooks/redux";
const START_PAGE: number = 1;
enum itemLimits {
  one = 3,
  two = 5,
  three = 10,
}
const LimitSetter: FC = () => {
  const { setPageLimit, setCurrentPage } = appSlice.actions;
  const dispatch = useAppDispatch();
  const selectInputHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const currentValueLimit = e.currentTarget.value;
    dispatch(setPageLimit(Number(currentValueLimit)));
    dispatch(setCurrentPage(START_PAGE));
  };
  return (
    <div style={{ display: "flex", gap: "15px" }}>
      <span>Limit items per page: </span>
      <select onChange={selectInputHandler}>
        <option value="3" defaultChecked>
          {itemLimits.one}
        </option>
        <option value="5">{itemLimits.two}</option>
        <option value="10">{itemLimits.three}</option>
      </select>
    </div>
  );
};

export default LimitSetter;
