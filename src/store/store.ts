import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { movieAPI } from "../apiService/UserServices";
import appReducer from "./reducers/AppSlice";
const rootReducer = combineReducers({
  appReducer,
  [movieAPI.reducerPath]: movieAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(movieAPI.middleware);
    },
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
