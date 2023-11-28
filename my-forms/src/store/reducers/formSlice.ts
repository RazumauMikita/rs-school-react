import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface formState {
  name: string;
}

const initialState: formState = {
  name: '',
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

export default formSlice.reducer;
