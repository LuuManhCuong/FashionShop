import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    isLoading: false,
    data: [],
  },
  reducers: {
    getShopRequest: (state) => {
      state.data = [];
      state.isLoading = true;
    },
    getShopSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    getShopFailure: (state) => {
      state.isLoading = false;
      state.data = [];
    },
  },
});

export const { getShopRequest, getShopFailure, getShopSuccess } =
  shopSlice.actions;

export default shopSlice.reducer;
