import { configureStore } from "@reduxjs/toolkit";
import paginationSlice from "./Slicers/paginationReducer";
import tuntikirjaSlicer from "./Slicers/tuntikirjaSlicer";

const store = configureStore({
  reducer: {
    pagination: paginationSlice,
    tuntikirja: tuntikirjaSlicer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
