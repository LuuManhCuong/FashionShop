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

// count noti 
export const countNoti = createSlice({
  name: "size",
  initialState: {
    notiCart: 0,
    notiLike: 0,
  },
  reducers: {
    setNotiCart(state, action) {
      state.notiCart = action.payload;
    },
    setNotiLike(state, action) {
      state.notiLike = action.payload;
    },
  },
});

export const { getHomeRequest, getHomeFailure, getHomeSuccess } =
  homeSlice.actions;

export default homeSlice.reducer;
