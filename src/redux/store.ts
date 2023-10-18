import { configureStore } from "@reduxjs/toolkit";
import paginationSlice from "./Slicers/paginationReducer";

const store = configureStore({
  reducer: {
    pagination: paginationSlice,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
