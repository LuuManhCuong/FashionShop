import { createSlice } from "@reduxjs/toolkit";

// call api
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

// filter category
export const shopFilter = createSlice({
  name: "filter",
  initialState: {
    isFilter: false,
    filter: [],
  },
  reducers: {
    SetFilter(state, action) {
      state.isFilter = true;
      if (state.filter.includes(action.payload)) {
        state.filter = state.filter.filter((e) => e !== action.payload);
      } else {
        state.filter = [...state.filter, action.payload];
      }
    },
  },
});

// filter price
export const shopFilterPrice = createSlice({
  name: "price",
  initialState: {
    isFilterSize: false,
    maxPrice: 2000,
  },
  reducers: {
    SetPrice(state, action) {
      state.isFilterSize = true;
      state.maxPrice = action.payload;
    },
  },
});

// filter size
export const shopFilterSize = createSlice({
  name: "size",
  initialState: {
    isFilterSize: false,
    sizes: [],
  },
  reducers: {
    SetSize(state, action) {
      state.isFilterSize = true;
      if (state.sizes.includes(action.payload)) {
        state.sizes = state.sizes.filter((e) => e !== action.payload);
      } else {
        state.sizes = [...state.sizes, action.payload];
      }
    },
  },
});

export const { getShopRequest, getShopFailure, getShopSuccess } =
  shopSlice.actions;

export default shopSlice.reducer;
