import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { initialState } from './slice.type';
import { FormData } from '../../utils/validation/validationSchema';

export const uncontrolledFormSlice = createSlice({
  name: 'uncontrolledForm',
  initialState,
  reducers: {
    setImage(state, action: PayloadAction<string>) {
      state.image = action.payload;
    },
    setData(state, action: PayloadAction<FormData>) {
      Object.assign(state, action.payload);
    },
  },
});

export default uncontrolledFormSlice.reducer;
