import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    isLoading: false,
    data: [],
  },
  reducers: {
    getHomeRequest: (state) => {
      state.data = [];
      state.isLoading = true;
    },
    getHomeSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    getHomeFailure: (state) => {
      state.isLoading = false;
      state.data = [];
    },
  },
});

export const { getHomeRequest, getHomeFailure, getHomeSuccess } =
  homeSlice.actions;

export default homeSlice.reducer;
