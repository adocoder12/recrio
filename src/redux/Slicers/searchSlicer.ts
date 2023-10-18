import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
//types
import { TUser } from "../../utils/types";

type initialStateType = {
  query: string;
  data: TUser[];
  filteredList?: TUser[];
};

const initialState: initialStateType = {
  query: "",
  data: [],
  filteredList: [],
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    search: (state, { payload }) => {
      state.query = payload;
    },
  },
});

export const { search } = searchSlice.actions;

export const userSelector = (state: RootState) => state.search;

export default searchSlice.reducer;
