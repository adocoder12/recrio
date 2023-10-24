import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
//types
import { TuserPreview, TUser } from "../../utils/types";

type initialStateType = {
  users: TUser[];
  postsPerPage: number;
  totalPosts: number;
  pageNumbers: number[];
  indexOfLastPost: number | undefined;
  indexOfFirstPost: number | undefined;
  currentPosts: TuserPreview[] | undefined;
  currentPage: number;
  error: string | null;
  loading: boolean;
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
  error: null,
  loading: false,
};
export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    getUsers: (state, { payload }) => {
      state.users = payload;
      state.totalPosts = payload.length;
    },
    getCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
      state.indexOfLastPost = state.currentPage * state.postsPerPage;
      state.indexOfFirstPost = state.indexOfLastPost - state.postsPerPage;
      state.currentPosts = state.users.slice(
        state.indexOfFirstPost,
        state.indexOfLastPost
      );
      state.currentPosts = state.currentPosts.map((item) => {
        return {
          name: item.name,
          lastname: item.lastname,
          email: item.email,
          phone: item.phone,
        };
      });
    },
    getByName: (state, { payload }) => {
      const query = payload.toLowerCase();
      if (query !== "") {
        state.currentPosts = state.users.filter((item) => {
          return (
            item.lastname?.toLowerCase().includes(query) ||
            item.name.toLowerCase().includes(query)
          );
        });
      } else {
        state.currentPosts = state.users.slice(
          state.indexOfFirstPost,
          state.indexOfLastPost
        );
      }
      state.currentPosts = state.currentPosts.map((item) => {
        return {
          name: item.name,
          lastname: item.lastname,
          email: item.email,
          phone: item.phone,
        };
      });
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
    },
  },
});

// Action creators are generated for each case reducer function
export const { getUsers, getCurrentPage, generatePageNumbers, getByName } =
  paginationSlice.actions;
export const userSelector = (state: RootState) => state.pagination;

export default paginationSlice.reducer;
