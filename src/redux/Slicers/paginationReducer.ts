import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
//types
import { TUser } from "../../utils/types";

type initialStateType = {
  users: TUser[];
  postsPerPage: number;
  totalPosts: number;
  pageNumbers: number[];
  indexOfLastPost: number | undefined;
  indexOfFirstPost: number | undefined;
  currentPosts: TUser[] | undefined;
  currentPage: number;
};

const initialState: initialStateType = {
  users: [],
  postsPerPage: 10,
  totalPosts: 0,
  pageNumbers: [],
  indexOfLastPost: undefined,
  indexOfFirstPost: undefined,
  currentPosts: undefined,
  currentPage: 1,
};

console.log("currentPosts " + initialState.currentPosts);

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    getUsers: (state, { payload }) => {
      state.users = payload;
      state.totalPosts = payload.length;
      state.indexOfLastPost = state.currentPage * state.postsPerPage;
      state.indexOfFirstPost = state.indexOfLastPost - state.postsPerPage;
      state.currentPosts = state.users.slice(
        state.indexOfFirstPost,
        state.indexOfLastPost
      );
    },
    getCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
      state.indexOfLastPost = state.currentPage * state.postsPerPage;
      state.indexOfFirstPost = state.indexOfLastPost - state.postsPerPage;
      state.currentPosts = state.users.slice(
        state.indexOfFirstPost,
        state.indexOfLastPost
      );
    },
    getByName: (state, { payload }) => {
      const query = payload.toLowerCase();
      if (query !== "") {
        state.currentPosts = state.users.filter((item) => {
          return item.name.toLowerCase().includes(query);
        });
      } else {
        state.currentPosts = state.users.slice(
          state.indexOfFirstPost,
          state.indexOfLastPost
        );
      }
    },
    generatePageNumbers: (state) => {
      const totalPages = Math.ceil(state.totalPosts / state.postsPerPage);

      if (state.pageNumbers.length < totalPages) {
        // Clear the existing page numbers array
        state.pageNumbers = [];

        for (let i = 1; i <= totalPages; i++) {
          state.pageNumbers.push(i);
        }
      }
      console.log("pageNumber reducer " + state.pageNumbers);
    },
  },
});

// Action creators are generated for each case reducer function
export const { getUsers, getCurrentPage, generatePageNumbers, getByName } =
  paginationSlice.actions;
export const userSelector = (state: RootState) => state.pagination;

export default paginationSlice.reducer;
