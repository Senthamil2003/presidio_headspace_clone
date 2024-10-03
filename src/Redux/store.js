// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import MyHeadspaceSlice from "./MyHeadspaceSlice";

export const store = configureStore({
  reducer: {
    data: MyHeadspaceSlice,
  },
});
