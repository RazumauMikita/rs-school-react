import { RootState } from '../store';

export const selectUncontrolledForm = (state: RootState) =>
  state.uncontrolledForm;
export const selectReactHookForm = (state: RootState) => state.reactHookForm;
export const selectData = (state: RootState) => state.data;
