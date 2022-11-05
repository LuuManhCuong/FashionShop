import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "admin",
  initialState: {
    isLoading: false,
    data: [],
  },
  reducers: {
    getAdminRequest: (state) => {
      state.isLoading = true;
    },
    getAdminSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    getAdminFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getAdminRequest, getAdminFailure, getAdminSuccess } =
  adminSlice.actions;

export default adminSlice.reducer;
