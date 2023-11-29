import { createSlice } from '@reduxjs/toolkit';
import { initialStateData } from './slice.type';

export const dataSlice = createSlice({
  name: 'data',
  initialState: initialStateData,
  reducers: {},
});

export default dataSlice.reducer;
