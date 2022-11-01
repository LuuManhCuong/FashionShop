import { createSlice } from "@reduxjs/toolkit";

export const bestSaleSlice = createSlice({
  name: "bestSale",
  initialState: {
    isLoading: false,
    slug: "",
  },
  reducers: {
    getBestSaleRequest: (state) => {
      state.isLoading = true;
    },
    getBestSaleSuccess: (state, action) => {
      state.isLoading = false;
      state.slug = action.payload;
    },
    getBestSaleFailure: (state) => {
      state.isLoading = false;
      state.slug = "";
    },
  },
});

export const { getBestSaleRequest, getBestSaleFailure, getBestSaleSuccess } =
  bestSaleSlice.actions;

export default bestSaleSlice.reducer;
