import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { appSlice } from "../../store/reducers/AppSlice";

const TopBar: FC = () => {
  const { searchQuery } = useAppSelector((state) => state.appReducer);
  const { setSearchQuery } = appSlice.actions;
  const [inputValue, setInputValue] = useState<string>(searchQuery);
  const dispatch = useAppDispatch();

  const inputChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const buttonClickHandler = () => {
    dispatch(setSearchQuery(inputValue));
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input type="text" value={inputValue} onChange={inputChangeHandler} />
        <button onClick={buttonClickHandler}>Search</button>
      </div>
    </>
  );
};

export default TopBar;
