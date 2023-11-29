import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormState, initialState } from './slice.type';

export const reactHookFormSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setDataToStore(state, action: PayloadAction<FormState>) {
      state = action.payload;
    },
  },
});

export default reactHookFormSlice.reducer;
