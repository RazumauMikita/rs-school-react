import { combineReducers, configureStore } from '@reduxjs/toolkit';

import reactHookFormReducer from './reducers/reactHookFormSlice';
import uncontrolledFormReducer from './reducers/uncontrolledFormSlice';
const rootReducer = combineReducers({
  reactHookFormReducer,
  uncontrolledFormReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
