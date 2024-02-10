import { configureStore } from "@reduxjs/toolkit";
import { gamesApi } from "../actions/gamesApi";

export const store = configureStore({
  reducer: {
    [gamesApi.reducerPath]: gamesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gamesApi.middleware),
});
