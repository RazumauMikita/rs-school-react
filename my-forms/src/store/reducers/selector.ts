import { RootState } from '../store';

export const selectUncontrolledForm = (state: RootState) =>
  state.uncontrolledFormReducer;
export const selectReactHookForm = (state: RootState) =>
  state.reactHookFormReducer;
export const selectData = (state: RootState) => state.dataSlice;
