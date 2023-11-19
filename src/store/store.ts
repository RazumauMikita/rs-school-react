import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userAPI } from "../apiService/UserServices";
import appReducer from "./reducers/AppSlice";
const rootReducer = combineReducers({
  appReducer,
  [userAPI.reducerPath]: userAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(userAPI.middleware);
    },
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
