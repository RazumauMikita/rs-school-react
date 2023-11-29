import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormState, initialState } from './slice.type';

export const uncontrolledFormSlice = createSlice({
  name: 'uncontrolledForm',
  initialState,
  reducers: {
    setImage(state, action: PayloadAction<string>) {
      state.image = action.payload;
    },
    setData(state, action: PayloadAction<FormState>) {
      Object.assign(state, action.payload);
    },
  },
});

export default uncontrolledFormSlice.reducer;
