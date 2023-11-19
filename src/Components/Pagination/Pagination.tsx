import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { appSlice } from "../../store/reducers/AppSlice";

const TOTAL_ITEMS = 12;

const getTotalPageCount = (itemsLimit: number): number =>
  Math.ceil(TOTAL_ITEMS / itemsLimit);

const NewPagination: FC = () => {
  const { currentPage, limit } = useAppSelector((state) => state.appReducer);
  const { setNextPage, setPrevPage } = appSlice.actions;
  const dispatch = useAppDispatch();
  const totalPages = getTotalPageCount(limit);

  const onPrevPageClick = () => {
    dispatch(setPrevPage());
  };

  const onNextPageClick = () => {
    dispatch(setNextPage());
  };

  return (
    <div>
      <button
        type="button"
        onClick={onPrevPageClick}
        disabled={currentPage === 1}
      >
        prev
      </button>
      <span>
        {currentPage} / {totalPages}
      </span>
      <button
        type="button"
        onClick={onNextPageClick}
        disabled={currentPage === totalPages}
      >
        next
      </button>
    </div>
  );
};

export default NewPagination;
