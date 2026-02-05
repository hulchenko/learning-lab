// 1. This is first step in Redux (initialize store configuration)

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";

export const store = configureStore({
  // this is global reducer function for all future actions
  reducer: {
    counter: counterSlice, // 4. Add created slice to the global store config
  },
});

// Types for TS
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
