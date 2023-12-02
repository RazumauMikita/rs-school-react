import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { initAppDataState } from './slice.type';

export const dataSlice = createSlice({
  name: 'data',
  initialState: initAppDataState,
  reducers: {
    setSuccessSubmitRHForm: (state, payload: PayloadAction<boolean>) => {
      state.successfulSubmitRHForm = payload.payload;
    },
    setSuccessSubmitUnCtForm: (state, payload: PayloadAction<boolean>) => {
      state.successfulSubmitUncontrolledForm = payload.payload;
    },
  },
});

export default dataSlice.reducer;
