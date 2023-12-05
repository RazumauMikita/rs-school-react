import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AppState } from './AppSlice.type';

const initialState: AppState = {
  limit: 3,
  isDetailOpen: false,
  searchQuery: '',
  currentPage: 1,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    openDetails(state) {
      state.isDetailOpen = true;
    },
    closeDetails(state) {
      state.isDetailOpen = false;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setPageLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload;
    },
    setNextPage(state) {
      state.currentPage += 1;
    },
    setPrevPage(state) {
      state.currentPage -= 1;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export default appSlice.reducer;
