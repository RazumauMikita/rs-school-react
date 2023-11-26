import React, { FC } from "react";

import { useAppDispatch, useAppSelector } from "../../src/hooks/redux";
import { appSlice } from "../../src/store/reducers/AppSlice";
import { selectApp } from "../../src/store/reducers/selectors";

const getTotalPageCount = (totalItems: number, itemsLimit: number): number =>
  Math.ceil(totalItems / itemsLimit);

interface TestI {
  items: number | undefined;
}

const NewPagination: FC<TestI> = (props) => {
  const { items } = props;
  const { currentPage, limit } = useAppSelector(selectApp);
  const { setNextPage, setPrevPage } = appSlice.actions;
  const dispatch = useAppDispatch();
  const totalPages = items ? getTotalPageCount(items, limit) : 0;

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
