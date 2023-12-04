import { combineReducers, configureStore } from '@reduxjs/toolkit';

import reactHookFormSLice from './reducers/reactHookFormSlice';
import uncontrolledFormSlice from './reducers/uncontrolledFormSlice';
import dataSlice from './reducers/dataSlice';
const rootReducer = combineReducers({
  reactHookForm: reactHookFormSLice,
  uncontrolledForm: uncontrolledFormSlice,
  data: dataSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
