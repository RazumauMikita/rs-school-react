import { combineReducers, configureStore } from '@reduxjs/toolkit';

import reactHookFormReducer from './reducers/reactHookFormSlice';
import uncontrolledFormReducer from './reducers/uncontrolledFormSlice';
import dataSlice from './reducers/dataSlice';
const rootReducer = combineReducers({
  reactHookFormReducer,
  uncontrolledFormReducer,
  dataSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
