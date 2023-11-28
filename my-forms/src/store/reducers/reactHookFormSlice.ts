import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormState } from './slice.type';

const initialState: FormState = {
  name: '',
};

export const reactHookFormSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

export default reactHookFormSlice.reducer;
