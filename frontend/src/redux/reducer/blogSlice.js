import { createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    isLoading: false,
    data: [],
  },
  reducers: {
    getBlogRequest: (state) => {
      state.data = [];
      state.isLoading = true;
    },
    getBlogSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    getBlogFailure: (state) => {
      state.isLoading = false;
      state.data = [];
    },
  },
});

export const { getBlogRequest, getBlogFailure, getBlogSuccess } =
  blogSlice.actions;

export default blogSlice.reducer;
