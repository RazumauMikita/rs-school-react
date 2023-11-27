import React, { ChangeEvent, FC } from 'react';

import { appSlice } from '../../src/store/reducers/AppSlice';
import { useAppDispatch, useAppSelector } from '../../src/hooks/redux';
import styles from './LimitSetter.module.css';
import { selectApp } from '../../src/store/reducers/selectors';
import router from 'next/router';

const START_PAGE: number = 1;
enum itemLimits {
  one = 3,
  two = 5,
  three = 10,
}
const LimitSetter: FC = () => {
  const { setPageLimit, setCurrentPage } = appSlice.actions;
  const { searchQuery } = useAppSelector(selectApp);
  const dispatch = useAppDispatch();

  const selectInputHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const currentValueLimit = e.currentTarget.value;
    dispatch(setPageLimit(Number(currentValueLimit)));
    dispatch(setCurrentPage(START_PAGE));
    router.push(`/?limit=${currentValueLimit}&page=1&search=${searchQuery}`);
  };
  return (
    <div className={styles.limitSetterContainer}>
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
