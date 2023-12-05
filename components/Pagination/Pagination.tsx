import React, { FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../src/hooks/redux';
import { appSlice } from '../../src/store/reducers/AppSlice';
import { selectApp } from '../../src/store/reducers/selectors';
import { IPagination } from './Pagination.type';
import styles from './Pagination.module.css';
import { useRouter } from 'next/router';

const getTotalPageCount = (totalItems: number, itemsLimit: number): number =>
  Math.ceil(totalItems / itemsLimit);

const NewPagination: FC<IPagination> = ({ items }) => {
  const router = useRouter();
  const { currentPage, limit, searchQuery } = useAppSelector(selectApp);
  const { setNextPage, setPrevPage } = appSlice.actions;
  const dispatch = useAppDispatch();
  const totalPages = items ? getTotalPageCount(items, limit) : 0;

  const setSearchURLParams = (num: number) => {
    router.push(`/?limit=${limit}&page=${currentPage + num}&search=${searchQuery}`);
  };

  const onPrevPageClick = () => {
    dispatch(setPrevPage());
    setSearchURLParams(-1);
  };

  const onNextPageClick = () => {
    dispatch(setNextPage());
    setSearchURLParams(1);
  };

  return (
    <div className={styles.paginationContainer}>
      <button type="button" onClick={onPrevPageClick} disabled={currentPage === 1}>
        prev
      </button>
      <span>
        {currentPage} / {totalPages}
      </span>
      <button type="button" onClick={onNextPageClick} disabled={currentPage === totalPages}>
        next
      </button>
    </div>
  );
};

export default NewPagination;
