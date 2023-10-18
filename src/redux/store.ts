import { configureStore } from "@reduxjs/toolkit";
import paginationSlice from "./Slicers/paginationReducer";
import searhSlice from "./Slicers/searchSlicer";

const store = configureStore({
  reducer: {
    pagination: paginationSlice,
    search: searhSlice,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
