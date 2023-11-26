import React, { FC, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../src/hooks/redux';
import { appSlice } from '../../src/store/reducers/AppSlice';
import { selectApp } from '../../src/store/reducers/selectors';

const TopBar: FC = () => {
  const { searchQuery } = useAppSelector(selectApp);
  const { setSearchQuery, setCurrentPage } = appSlice.actions;
  const [inputValue, setInputValue] = useState<string>(searchQuery);
  const dispatch = useAppDispatch();

  const inputChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const buttonClickHandler = () => {
    dispatch(setSearchQuery(inputValue));
    dispatch(setCurrentPage(1));
    localStorage.setItem('search-query', inputValue);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <input type="text" value={inputValue} onChange={inputChangeHandler} />
        <button onClick={buttonClickHandler}>Search</button>
      </div>
    </>
  );
};

export default TopBar;
