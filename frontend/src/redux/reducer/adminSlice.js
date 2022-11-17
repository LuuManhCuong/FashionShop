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

export const reloadApi = createSlice({
  name: "reload",
  initialState: {
    reload: 1,
  },
  reducers: {
    setReload: (state, action) => {
      if (state.reload >= 10) {
        return (state.reload = 1);
      }
      state.reload += 1;
    },
  },
});

export const { getAdminRequest, getAdminFailure, getAdminSuccess } =
  adminSlice.actions;

export default adminSlice.reducer;
